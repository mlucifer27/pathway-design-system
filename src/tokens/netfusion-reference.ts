/**
 * Netfusion Sass/CSS reference (`themes-to-reference/.../netfusion`).
 * Chakra tokens and marketing components should match these literals.
 */
export const NETFUSION_REFERENCE = {
  primaryColor: "#02C173",
  darkCanvas: "#060606",
  /** `.page-bg` / overlays only — not full-bleed Home1 section bands (canvas stays `#060606`). */
  pageBgAccent: "#14203A",
  lightCanvas: "#F7FBFE",
  cardSurface: "#121212",
  textBodyDark: "#ffffffcc",
  textHeadingDark: "#ffffff",
  textMutedDark: "#6a6c73",
  borderSubtle: "#e7edf433",
  glassGradientDark:
    "linear-gradient(110deg, rgba(40, 40, 40, 0.29) -0.9%, rgba(77, 77, 77, 0.21) 101.13%)",
  glassGradientLight:
    "linear-gradient(110deg, rgba(255, 255, 255, 0.96) -0.9%, rgba(2, 193, 115, 0.1) 101.13%)",
  orbOpacityLight: 0.18,
  orbOpacityLightSecondary: 0.1,
  glassShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.1)",
  shadowBrand: "rgba(2, 193, 115, 0.45)",
  fontFamily: "Inter, system-ui, sans-serif",
  heroFontSize: "4.3125rem",
  sectionTitleFontSize: "3.0625rem",
  sectionPaddingY: "8.5rem",
  sectionPaddingYTablet: "6.25rem",
  sectionPaddingYMobile: "4.375rem",
  heroPaddingTop: "13.125rem",
  heroPaddingBottom: "5.625rem",
  sectionTitleMarginBottom: "3.75rem",
  cardRadiusPx: "20px",
  priceCardRadiusPx: "5px",
  buttonOutlineRadiusPx: "10px",
  buttonSolidRadiusPx: "50px",
  buttonPaddingOutline: "17px 32px",
  buttonPaddingSolid: "16px 40px",
  buttonFontSize: "15px",
  orbBlurPx: 244,
  orbOpacity: 0.3,
  transitionDefault: "0.5s ease-out",
  fadeUpTranslatePx: 30,
  fadeUpDuration: "1.5s",
} as const;
