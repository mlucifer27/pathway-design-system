/**
 * Netfusion Sass/CSS reference (`themes-to-reference/.../netfusion`).
 * Chakra tokens and marketing components should match these literals.
 */
export const NETFUSION_REFERENCE = {
  primaryColor: "#02C173",
  darkCanvas: "#060606",
  /** `.page-bg` / overlays only — not full-bleed Home1 section bands (canvas stays `#060606`). */
  pageBgAccent: "#14203A",
  lightCanvas: "#F4FAFD",
  /** Layered mint canvas — mirrors dark hero depth without a flat white field. */
  lightCanvasGradient:
    "radial-gradient(ellipse 90% 70% at 50% -8%, rgba(2, 193, 115, 0.14) 0%, transparent 55%), radial-gradient(ellipse 55% 40% at 88% 18%, rgba(2, 193, 115, 0.09) 0%, transparent 50%), linear-gradient(180deg, #E8F5F0 0%, #F7FBFE 40%, #F4FAFD 100%)",
  cardSurface: "#121212",
  textBodyDark: "#ffffffcc",
  textHeadingDark: "#ffffff",
  textMutedDark: "#6a6c73",
  borderSubtle: "#e7edf433",
  glassGradientDark:
    "linear-gradient(110deg, rgba(40, 40, 40, 0.29) -0.9%, rgba(77, 77, 77, 0.21) 101.13%)",
  glassGradientLight:
    "linear-gradient(110deg, rgba(247, 251, 254, 0.88) -0.9%, rgba(232, 245, 240, 0.82) 55%, rgba(2, 193, 115, 0.08) 101.13%)",
  orbOpacityLight: 0.24,
  orbOpacityLightSecondary: 0.14,
  orbOpacityLightCenter: 0.16,
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
