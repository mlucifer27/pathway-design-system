import { PATHWAY_THEME_STORAGE_KEY } from "./theme-storage";
import { buildThemeInitScriptBody } from "./theme-persistence";

/** Inline script for `app/layout.tsx` — prevents theme flash before React hydrates. */
export function buildThemeInitScriptHtml(
  storageKey: string = PATHWAY_THEME_STORAGE_KEY,
  cookieDomain?: string,
): string {
  return `(function(){${buildThemeInitScriptBody(storageKey, cookieDomain)}})();`;
}

export type PathwayThemeInitScriptProps = {
  storageKey?: string;
  /** Override parent cookie domain (e.g. staging). Omit to auto-detect `.pathwaysg.net`. */
  cookieDomain?: string;
};

export function PathwayThemeInitScript({
  storageKey = PATHWAY_THEME_STORAGE_KEY,
  cookieDomain,
}: PathwayThemeInitScriptProps) {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: buildThemeInitScriptHtml(storageKey, cookieDomain),
      }}
    />
  );
}
