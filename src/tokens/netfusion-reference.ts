/**
 * Netfusion Sass/CSS reference (`themes-to-reference/.../netfusion`).
 * Chakra tokens and marketing components should match these literals.
 */
export const NETFUSION_REFERENCE = {
  primaryColor: "#02C173",
  darkCanvas: "#060606",
  /** `.page-bg` / overlays only — not full-bleed Home1 section bands (canvas stays `#060606`). */
  pageBgAccent: "#14203A",
  lightCanvas: "#F0F4F3",
  /** Accent green on light canvases — readable, not neon. */
  lightBrandAccent: "#047857",
  /** Hero + page canvas — spotlight, corner depth, cool base (Arena Light). */
  lightCanvasGradient:
    "radial-gradient(ellipse 120% 85% at 50% -18%, rgba(2, 193, 115, 0.14) 0%, transparent 58%), radial-gradient(ellipse 42% 38% at 100% 0%, rgba(20, 32, 58, 0.07) 0%, transparent 52%), radial-gradient(ellipse 48% 42% at 0% 88%, rgba(2, 168, 98, 0.1) 0%, transparent 48%), linear-gradient(165deg, #E3EBE8 0%, #F0F4F3 42%, #FAFCFB 100%)",
  /** Alternating section bands on marketing pages. */
  lightSectionBandGradient:
    "linear-gradient(180deg, #DCE6E2 0%, #E8EFEC 50%, #F0F4F3 100%)",
  lightCtaBandGradient:
    "linear-gradient(135deg, rgba(2, 193, 115, 0.08) 0%, rgba(255, 255, 255, 0.92) 45%, rgba(232, 245, 240, 0.95) 100%)",
  lightIconBoxGradient:
    "linear-gradient(145deg, #02C173 0%, #0A5C3A 100%)",
  lightCardShadow:
    "0 1px 0 rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06), 0 24px 48px rgba(2, 120, 72, 0.08)",
  lightCardShadowHover:
    "0 2px 0 rgba(15, 23, 42, 0.05), 0 16px 40px rgba(15, 23, 42, 0.1), 0 32px 64px rgba(2, 120, 72, 0.12)",
  lightHeaderShadow: "0 1px 0 rgba(15, 23, 42, 0.06), 0 12px 40px rgba(15, 23, 42, 0.08)",
  cardSurface: "#121212",
  textBodyDark: "#ffffffcc",
  textHeadingDark: "#ffffff",
  textMutedDark: "#6a6c73",
  borderSubtle: "#e7edf433",
  glassGradientDark:
    "linear-gradient(110deg, rgba(40, 40, 40, 0.29) -0.9%, rgba(77, 77, 77, 0.21) 101.13%)",
  glassGradientLight:
    "linear-gradient(110deg, rgba(255, 255, 255, 0.88) -0.9%, rgba(240, 248, 245, 0.92) 55%, rgba(230, 245, 238, 0.85) 101.13%)",
  orbOpacityLight: 0.16,
  orbOpacityLightSecondary: 0.1,
  orbOpacityLightCenter: 0.12,
  lightRingStroke: "rgba(2, 168, 98, 0.09)",
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
