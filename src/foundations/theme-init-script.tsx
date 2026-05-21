import { PATHWAY_THEME_STORAGE_KEY } from "./theme-storage";

/** Inline script for `app/layout.tsx` — prevents theme flash before React hydrates. */
export function buildThemeInitScriptHtml(
  storageKey: string = PATHWAY_THEME_STORAGE_KEY,
): string {
  return `(function(){try{var k=${JSON.stringify(storageKey)};var t=localStorage.getItem(k)||"system";var r=t==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t;document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(r);document.documentElement.dataset.theme=r;document.documentElement.style.colorScheme=r;}catch(e){}})();`;
}

export type PathwayThemeInitScriptProps = {
  storageKey?: string;
};

export function PathwayThemeInitScript({
  storageKey = PATHWAY_THEME_STORAGE_KEY,
}: PathwayThemeInitScriptProps) {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: buildThemeInitScriptHtml(storageKey) }}
    />
  );
}
