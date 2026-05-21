import { NETFUSION_REFERENCE } from "./netfusion-reference";

export const pathwayTypographyTokens = {
  fonts: {
    heading: {
      value: `var(--font-inter), ${NETFUSION_REFERENCE.fontFamily}`,
    },
    body: {
      value: 'var(--font-inter), system-ui, sans-serif',
    },
    marketing: {
      value: `var(--font-inter), ${NETFUSION_REFERENCE.fontFamily}`,
    },
  },
  fontSizes: {
    hero: { value: NETFUSION_REFERENCE.heroFontSize },
    sectionTitle: { value: NETFUSION_REFERENCE.sectionTitleFontSize },
    shortLabel: { value: "0.75rem" },
  },
} as const;
