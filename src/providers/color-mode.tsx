"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  normalizeThemeChoice,
  PATHWAY_DEFAULT_THEME,
  persistThemePreference,
  readThemePreference,
  type ThemeChoice,
} from "../foundations/theme-persistence";
import { PATHWAY_THEME_STORAGE_KEY } from "../foundations/theme-storage";

export type { ThemeChoice } from "../foundations/theme-persistence";
export type ResolvedTheme = ThemeChoice;

export type ColorModeContextValue = {
  colorMode: ResolvedTheme;
  theme: ThemeChoice;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeChoice) => void;
};

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

function applyResolvedTheme(resolved: ResolvedTheme): void {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;
}

export type ColorModeProviderProps = {
  children: ReactNode;
  storageKey?: string;
  /** Optional parent cookie domain; auto-detects `.pathwaysg.net` when omitted. */
  cookieDomain?: string;
};

export function ColorModeProvider({
  children,
  storageKey = PATHWAY_THEME_STORAGE_KEY,
  cookieDomain,
}: ColorModeProviderProps) {
  const [theme, setThemeState] = useState<ThemeChoice>(PATHWAY_DEFAULT_THEME);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(PATHWAY_DEFAULT_THEME);

  const syncFromStorage = useCallback(() => {
    const stored = readThemePreference(storageKey, cookieDomain);
    setThemeState(stored);
    setResolvedTheme(stored);
    applyResolvedTheme(stored);
  }, [cookieDomain, storageKey]);

  useEffect(() => {
    syncFromStorage();
  }, [syncFromStorage]);

  useEffect(() => {
    const onFocus = () => {
      syncFromStorage();
    };
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [syncFromStorage]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== storageKey) {
        return;
      }
      const stored = normalizeThemeChoice(event.newValue);
      setThemeState(stored);
      setResolvedTheme(stored);
      applyResolvedTheme(stored);
      persistThemePreference(stored, storageKey, cookieDomain);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [cookieDomain, storageKey]);

  const setTheme = useCallback(
    (next: ThemeChoice) => {
      setThemeState(next);
      persistThemePreference(next, storageKey, cookieDomain);
      setResolvedTheme(next);
      applyResolvedTheme(next);
    },
    [cookieDomain, storageKey],
  );

  const value = useMemo(
    () => ({
      colorMode: resolvedTheme,
      theme,
      resolvedTheme,
      setTheme,
    }),
    [resolvedTheme, setTheme, theme],
  );

  return (
    <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>
  );
}

export function useColorMode(): ColorModeContextValue {
  const context = useContext(ColorModeContext);
  if (context === null) {
    throw new Error("useColorMode must be used within ColorModeProvider");
  }
  return context;
}
