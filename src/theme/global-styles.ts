import { NETFUSION_REFERENCE } from "../tokens/netfusion-reference";

const fadeUpY = `${NETFUSION_REFERENCE.fadeUpTranslatePx}px`;

/** Chakra `globalCss` — literal Netfusion Home1 / style.css mapping. */
export const pathwayGlobalCss = {
  html: {
    colorScheme: "dark",
  },
  "html.light": {
    colorScheme: "light",
  },
  "html, body": {
    backgroundColor: "bg.DEFAULT",
    color: "fg.DEFAULT",
    fontFamily: "body",
    fontSize: "16px",
    lineHeight: "24px",
    minHeight: "100%",
  },
  "html.light body": {
    backgroundColor: NETFUSION_REFERENCE.lightCanvas,
    backgroundImage: NETFUSION_REFERENCE.lightCanvasGradient,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  body: { overflowX: "clip" },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "heading",
    fontWeight: "700",
    color: "fg.heading",
  },
  "h1": {
    fontSize: { base: "4xl", lg: "hero" },
    lineHeight: { base: "1.15", lg: "1.09" },
    letterSpacing: "-0.04em",
  },
  "h2": {
    fontSize: { base: "32px", md: "38px", lg: "sectionTitle" },
    lineHeight: { base: "42px", md: "48px", lg: "55.65px" },
    letterSpacing: { base: "-0.04em", lg: "-1.59px" },
  },
  "h3": {
    fontSize: { base: "28px", lg: "37px" },
    lineHeight: { base: "36px", lg: "48px" },
    letterSpacing: { base: "-0.03em", lg: "-1.17px" },
  },
  "h4": {
    fontSize: "24px",
    lineHeight: "39px",
    fontWeight: "700",
  },
  ".marketing-accent": {
    color: "brand.fg",
  },
  ".marketing-short-label": {
    display: "inline-flex !important",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "fit-content !important",
    maxW: "100%",
    flexShrink: 0,
    alignSelf: "center",
    fontSize: "shortLabel",
    fontWeight: "700",
    lineHeight: "1.1",
    letterSpacing: "-0.12px",
    color: "brand.fg",
    borderWidth: "1px",
    borderColor: "brand.solid",
    borderRadius: "5px",
    px: "2.5",
    py: "1.5",
    mb: "4",
  },
  ".blur-shape": {
    pointerEvents: "none",
  },
  ".glass-panel": {
    background: "bg.glass",
    backdropFilter: "blur(6.5px)",
    border: "1px solid",
    borderColor: "border.netfusion",
    borderRadius: "panel",
    boxShadow: NETFUSION_REFERENCE.glassShadow,
  },
  ".auth-panel": {
    background: "bg.glass",
    backdropFilter: "blur(6.5px)",
    border: "1px solid",
    borderColor: "border.netfusion",
    borderRadius: "panel",
    boxShadow: NETFUSION_REFERENCE.glassShadow,
  },
  ".netfusion-price-card": {
    background: "bg.card",
    border: "1px solid",
    borderColor: "border.netfusion",
    borderRadius: "sm",
  },
  ".netfusion-info-card": {
    background: "bg.card",
    borderRadius: "sm",
    padding: "40px",
    height: "100%",
    textAlign: "left",
  },
  ".netfusion-icon-box": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "65px",
    height: "65px",
    borderRadius: "20px",
    flexShrink: 0,
    backgroundImage:
      "linear-gradient(280.36deg, transparent 20.42%, rgba(2, 193, 115, 0.4) 84.24%), linear-gradient(0deg, transparent, transparent)",
    color: "brand.fg",
  },
  "html.light .marketing-section-band": {
    backgroundImage: NETFUSION_REFERENCE.lightSectionBandGradient,
    borderTopWidth: "1px",
    borderBottomWidth: "1px",
    borderColor: "rgba(15, 23, 42, 0.08)",
  },
  "html.light .marketing-section-spotlight": {
    backgroundImage:
      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(2, 193, 115, 0.06) 0%, transparent 70%)",
  },
  "html.light .marketing-hero": {
    position: "relative",
  },
  "html.light .glass-panel": {
    background: NETFUSION_REFERENCE.glassGradientLight,
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderColor: "rgba(15, 23, 42, 0.1)",
    boxShadow:
      "0 1px 0 rgba(15, 23, 42, 0.05), 0 12px 32px rgba(15, 23, 42, 0.08)",
  },
  "html.light .marketing-site-header": {
    background: "rgba(255, 255, 255, 0.78)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottomColor: "rgba(15, 23, 42, 0.1)",
    boxShadow: NETFUSION_REFERENCE.lightHeaderShadow,
  },
  "html.light .marketing-feature-card": {
    background: "#FFFFFF",
    borderTopWidth: "3px",
    borderTopStyle: "solid",
    borderTopColor: NETFUSION_REFERENCE.primaryColor,
    borderColor: "rgba(15, 23, 42, 0.1)",
    boxShadow: NETFUSION_REFERENCE.lightCardShadow,
    transition: "transform 0.35s ease-out, box-shadow 0.35s ease-out",
  },
  "html.light .marketing-feature-card:hover": {
    transform: "translateY(-3px)",
    boxShadow: NETFUSION_REFERENCE.lightCardShadowHover,
  },
  "html.light .marketing-feature-card h3": {
    fontWeight: "700",
  },
  "html.light .marketing-cta-panel": {
    backgroundImage: NETFUSION_REFERENCE.lightCtaBandGradient,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(2, 193, 115, 0.22)",
    boxShadow: NETFUSION_REFERENCE.lightCardShadow,
  },
  "html.light .netfusion-info-card, html.light .netfusion-price-card": {
    background: "#FFFFFF",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(15, 23, 42, 0.1)",
    boxShadow: NETFUSION_REFERENCE.lightCardShadow,
    transition: "transform 0.35s ease-out, box-shadow 0.35s ease-out",
  },
  "html.light .netfusion-info-card:hover, html.light .netfusion-price-card:hover": {
    transform: "translateY(-4px)",
    boxShadow: NETFUSION_REFERENCE.lightCardShadowHover,
  },
  "html.light .netfusion-icon-box": {
    backgroundImage: NETFUSION_REFERENCE.lightIconBoxGradient,
    color: "#FFFFFF",
    boxShadow: "0 10px 28px rgba(2, 120, 72, 0.28)",
  },
  "html.light .marketing-accent": {
    backgroundImage: `linear-gradient(120deg, ${NETFUSION_REFERENCE.lightBrandAccent} 0%, #02A862 55%, ${NETFUSION_REFERENCE.primaryColor} 100%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  "html.light .marketing-short-label": {
    color: "#FFFFFF",
    borderWidth: "0",
    backgroundImage: NETFUSION_REFERENCE.lightIconBoxGradient,
    boxShadow: "0 4px 14px rgba(2, 120, 72, 0.28)",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    fontSize: "11px",
  },
  "html.light a:not([data-theme='button'])": {
    color: "rgba(15, 23, 42, 0.72)",
  },
  "html.light a:not([data-theme='button']):hover": {
    color: NETFUSION_REFERENCE.lightBrandAccent,
  },
  "*": { borderColor: "border.DEFAULT" },
  "::selection": {
    background: "brand.solid",
    color: "brand.contrast",
  },
  ":focus-visible": {
    outline: "2px solid",
    outlineColor: "brand.focusRing",
    outlineOffset: "2px",
  },
  a: {
    color: "fg.muted",
    textDecoration: "none",
    transition: `color ${NETFUSION_REFERENCE.transitionDefault}`,
    _hover: { color: "brand.fg" },
  },
  "a[data-theme='button']": {
    color: "inherit",
    _hover: { color: "inherit" },
  },
  "@keyframes pathway-move-fade-up": {
    from: {
      opacity: 0,
      transform: `translateY(${fadeUpY})`,
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes pathway-slide-in-down": {
    from: {
      opacity: 0,
      transform: "translate3d(0, -30px, 0)",
    },
    to: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
    },
  },
  ".animate-fade-up": {
    animation: `pathway-move-fade-up ${NETFUSION_REFERENCE.fadeUpDuration} ease-out forwards`,
    opacity: 0,
  },
  ".animate-slide-in-down": {
    animation: `pathway-slide-in-down ${NETFUSION_REFERENCE.fadeUpDuration} ease-out forwards`,
    opacity: 0,
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".animate-fade-up, .animate-slide-in-down": {
      animation: "none !important",
      opacity: 1,
      transform: "none",
    },
  },
} as const;
