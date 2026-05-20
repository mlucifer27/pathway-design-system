import { NETFUSION_REFERENCE } from "./netfusion-reference";

/** Netfusion `.page-area`, banner, section title spacing. */
export const pathwaySpacingTokens = {
  sectionY: { value: NETFUSION_REFERENCE.sectionPaddingY },
  sectionYTablet: { value: "6.25rem" },
  sectionYMobile: { value: "4.375rem" },
  heroPt: { value: NETFUSION_REFERENCE.heroPaddingTop },
  sectionTitleMb: { value: "3.75rem" },
} as const;
