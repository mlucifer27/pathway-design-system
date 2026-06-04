import { PATHWAY_THEME_STORAGE_KEY } from "./theme-storage";

export type ThemeChoice = "light" | "dark";

/** Default for new visitors — never follows OS `prefers-color-scheme`. */
export const PATHWAY_DEFAULT_THEME: ThemeChoice = "dark";

/** Parent domain for theme cookie — matches API `AUTH_COOKIE_DOMAIN` in production. */
export const PATHWAY_THEME_COOKIE_PARENT_DOMAIN = ".pathwaysg.net";

export const PATHWAY_THEME_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function normalizeThemeChoice(stored: string | null | undefined): ThemeChoice {
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return PATHWAY_DEFAULT_THEME;
}

/** Resolves cookie Domain= for cross-subdomain theme sync. */
export function resolvePathwayThemeCookieDomain(
  hostname: string,
  explicitDomain?: string,
): string {
  const trimmed = explicitDomain?.trim();
  if (trimmed) {
    return trimmed;
  }
  if (
    hostname === "pathwaysg.net" ||
    hostname.endsWith(".pathwaysg.net")
  ) {
    return PATHWAY_THEME_COOKIE_PARENT_DOMAIN;
  }
  return "";
}

function readThemeFromCookie(
  storageKey: string,
  documentCookie: string,
): string | null {
  const prefix = `${storageKey}=`;
  const parts = documentCookie.split("; ");
  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    if (part.startsWith(prefix)) {
      const raw = part.slice(prefix.length);
      try {
        return decodeURIComponent(raw);
      } catch {
        return raw;
      }
    }
  }
  return null;
}

function readThemeFromLocalStorage(storageKey: string): string | null {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

export function readThemePreference(
  storageKey: string = PATHWAY_THEME_STORAGE_KEY,
  cookieDomain?: string,
): ThemeChoice {
  if (typeof document === "undefined") {
    return PATHWAY_DEFAULT_THEME;
  }
  const domain = resolvePathwayThemeCookieDomain(
    window.location.hostname,
    cookieDomain,
  );
  const fromCookie = readThemeFromCookie(storageKey, document.cookie);
  const normalizedCookie = normalizeThemeChoice(fromCookie);
  if (fromCookie === "light" || fromCookie === "dark") {
    return normalizedCookie;
  }

  const fromStorage = readThemeFromLocalStorage(storageKey);
  const normalizedStorage = normalizeThemeChoice(fromStorage);
  if (
    domain &&
    (fromStorage === "light" || fromStorage === "dark") &&
    fromCookie !== fromStorage
  ) {
    writeThemeCookie(fromStorage, storageKey, domain);
  }

  return normalizedStorage;
}

export function writeThemeCookie(
  theme: ThemeChoice,
  storageKey: string = PATHWAY_THEME_STORAGE_KEY,
  cookieDomain: string,
): void {
  if (typeof document === "undefined" || !cookieDomain) {
    return;
  }
  const encoded = encodeURIComponent(theme);
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${storageKey}=${encoded}; path=/; max-age=${PATHWAY_THEME_COOKIE_MAX_AGE_SECONDS}; SameSite=Lax${secure}; domain=${cookieDomain}`;
}

export function persistThemePreference(
  theme: ThemeChoice,
  storageKey: string = PATHWAY_THEME_STORAGE_KEY,
  cookieDomain?: string,
): void {
  if (typeof document === "undefined") {
    return;
  }
  const domain = resolvePathwayThemeCookieDomain(
    window.location.hostname,
    cookieDomain,
  );
  try {
    localStorage.setItem(storageKey, theme);
  } catch {
    /* ignore storage errors */
  }
  if (domain) {
    writeThemeCookie(theme, storageKey, domain);
  }
}

/** Inline IIFE body — keep in sync with `readThemePreference` / `persistThemePreference`. */
export function buildThemeInitScriptBody(
  storageKey: string = PATHWAY_THEME_STORAGE_KEY,
  explicitCookieDomain?: string,
): string {
  const keyJson = JSON.stringify(storageKey);
  const explicitJson = JSON.stringify(explicitCookieDomain ?? "");
  const parentDomainJson = JSON.stringify(PATHWAY_THEME_COOKIE_PARENT_DOMAIN);
  const maxAge = PATHWAY_THEME_COOKIE_MAX_AGE_SECONDS;

  return `try{
var k=${keyJson};
var explicitDom=${explicitJson};
var parentDom=${parentDomainJson};
var host=location.hostname;
var dom=explicitDom||(host==="pathwaysg.net"||host.length>13&&host.slice(-13)===".pathwaysg.net"?parentDom:"");
var t=null;
var prefix=k+"=";
var parts=document.cookie?document.cookie.split("; "):[];
for(var i=0;i<parts.length;i++){var p=parts[i];if(p.indexOf(prefix)===0){try{t=decodeURIComponent(p.slice(prefix.length))}catch(e){t=p.slice(prefix.length)}break}}
if(t!=="light"&&t!=="dark"){try{t=localStorage.getItem(k)}catch(e){}}
if(t!=="light"&&t!=="dark")t="dark";
if(dom&&(t==="light"||t==="dark")){
var sec=location.protocol==="https:"?"; Secure":"";
document.cookie=k+"="+encodeURIComponent(t)+"; path=/; max-age=${maxAge}; SameSite=Lax"+sec+"; domain="+dom;
try{localStorage.setItem(k,t)}catch(e){}
}
document.documentElement.classList.remove("light","dark");
document.documentElement.classList.add(t);
document.documentElement.dataset.theme=t;
document.documentElement.style.colorScheme=t;
}catch(e){}`;
}
