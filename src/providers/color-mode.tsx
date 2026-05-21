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
import { PATHWAY_THEME_STORAGE_KEY } from "../foundations/theme-storage";

export type ThemeChoice = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export type ColorModeContextValue = {
  colorMode: ResolvedTheme;
  theme: ThemeChoice;
  resolvedTheme: ResolvedTheme;
  systemTheme: ResolvedTheme;
  setTheme: (theme: ThemeChoice) => void;
};

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

function readStoredTheme(storageKey: string): ThemeChoice {
  if (typeof window === "undefined") {
    return "system";
  }
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    /* ignore storage errors */
  }
  return "system";
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: ThemeChoice): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

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
};

export function ColorModeProvider({
  children,
  storageKey = PATHWAY_THEME_STORAGE_KEY,
}: ColorModeProviderProps) {
  const [theme, setThemeState] = useState<ThemeChoice>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const stored = readStoredTheme(storageKey);
    const resolved = resolveTheme(stored);
    setThemeState(stored);
    setResolvedTheme(resolved);
    setSystemTheme(getSystemTheme());
    applyResolvedTheme(resolved);
  }, [storageKey]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const nextSystem = getSystemTheme();
      setSystemTheme(nextSystem);
      if (theme === "system") {
        setResolvedTheme(nextSystem);
        applyResolvedTheme(nextSystem);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback(
    (next: ThemeChoice) => {
      setThemeState(next);
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        /* ignore storage errors */
      }
      const resolved = resolveTheme(next);
      setResolvedTheme(resolved);
      if (next === "system") {
        setSystemTheme(getSystemTheme());
      }
      applyResolvedTheme(resolved);
    },
    [storageKey],
  );

  const value = useMemo(
    () => ({
      colorMode: resolvedTheme,
      theme,
      resolvedTheme,
      systemTheme,
      setTheme,
    }),
    [resolvedTheme, setTheme, systemTheme, theme],
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
