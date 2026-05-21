import { NETFUSION_REFERENCE } from "./netfusion-reference";

/** Netfusion `.page-area`, banner, section title spacing. */
export const pathwaySpacingTokens = {
  sectionY: { value: NETFUSION_REFERENCE.sectionPaddingY },
  sectionYTablet: { value: "6.25rem" },
  sectionYMobile: { value: "4.375rem" },
  heroPt: { value: NETFUSION_REFERENCE.heroPaddingTop },
  heroPb: { value: NETFUSION_REFERENCE.heroPaddingBottom },
  sectionTitleMb: { value: NETFUSION_REFERENCE.sectionTitleMarginBottom },
} as const;
