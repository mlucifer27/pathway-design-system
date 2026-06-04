import { PATHWAY_DEFAULT_THEME, type ThemeChoice } from "./theme-persistence";

export { PATHWAY_DEFAULT_THEME };

/** Merge font/variable classes with the default dark root class (SSR + first paint). */
export function pathwayRootHtmlClassName(...extraClassNames: Array<string | undefined>): string {
  const extras = extraClassNames.filter((part): part is string => Boolean(part?.trim()));
  return [PATHWAY_DEFAULT_THEME, ...extras].join(" ");
}

/** Static root attributes — inline script may switch to light when the user chose it. */
export function pathwayRootHtmlAttributes(
  ...extraClassNames: Array<string | undefined>
): {
  className: string;
  "data-theme": ThemeChoice;
  style: { colorScheme: ThemeChoice };
} {
  return {
    className: pathwayRootHtmlClassName(...extraClassNames),
    "data-theme": PATHWAY_DEFAULT_THEME,
    style: { colorScheme: PATHWAY_DEFAULT_THEME },
  };
}
