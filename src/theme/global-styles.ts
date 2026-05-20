import { NETFUSION_REFERENCE } from "../tokens/netfusion-reference";

const fadeUpY = `${NETFUSION_REFERENCE.fadeUpTranslatePx}px`;

/** Chakra `globalCss` — Netfusion motion, glass, links, focus. */
export const pathwayGlobalCss = {
  "html, body": {
    backgroundColor: "bg.DEFAULT",
    color: "fg.DEFAULT",
    fontFamily: "body",
    lineHeight: "1.5",
    minHeight: "100%",
  },
  body: { overflowX: "clip" },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "heading",
    letterSpacing: "-0.02em",
  },
  ".marketing-heading": {
    fontFamily: "marketing",
    letterSpacing: "-0.04em",
  },
  ".glass-panel": {
    background: "bg.glass",
    backdropFilter: "blur(6.5px)",
    border: "1px solid",
    borderColor: "border.subtle",
    borderRadius: "card",
    boxShadow: { _light: "md", _dark: "0 8px 32px rgba(0, 0, 0, 0.2)" },
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
  ".animate-fade-up": {
    animation: `pathway-move-fade-up ${NETFUSION_REFERENCE.fadeUpDuration} ease-out forwards`,
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".animate-fade-up": {
      animation: "none !important",
      opacity: 1,
      transform: "none",
    },
  },
} as const;
