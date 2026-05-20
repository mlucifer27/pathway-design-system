import { NETFUSION_REFERENCE } from "./netfusion-reference";

const darkBg = NETFUSION_REFERENCE.darkCanvas;
const darkSection = NETFUSION_REFERENCE.sectionSurface;
const lightBg = NETFUSION_REFERENCE.lightCanvas;

/** Semantic tokens — shared across marketing and product surfaces. */
export const pathwaySemanticColorTokens = {
  bg: {
    DEFAULT: { value: { _light: lightBg, _dark: darkBg } },
    canvas: { value: "transparent" },
    section: {
      value: { _light: "#EEF5F8", _dark: darkSection },
    },
    subtle: {
      value: { _light: "rgba(15, 23, 42, 0.04)", _dark: "rgba(255, 255, 255, 0.02)" },
    },
    surface: {
      value: { _light: "rgba(255, 255, 255, 0.9)", _dark: "rgba(20, 32, 58, 0.6)" },
    },
    elevated: {
      value: { _light: "#FFFFFF", _dark: "rgba(255, 255, 255, 0.08)" },
    },
    inverse: { value: { _light: darkBg, _dark: "#FFFFFF" } },
    panel: {
      value: {
        _light: "rgba(255, 255, 255, 0.98)",
        _dark: "rgba(6, 6, 6, 0.94)",
      },
    },
    muted: {
      value: { _light: "rgba(15, 23, 42, 0.08)", _dark: "rgba(255, 255, 255, 0.12)" },
    },
    glass: {
      value: {
        _light: "#FFFFFF",
        _dark:
          "linear-gradient(110deg, rgba(54, 54, 54, 0.29) 0%, rgba(54, 54, 54, 0.12) 100%)",
      },
    },
    glassHover: {
      value: { _light: "#F1F5F9", _dark: "rgba(255, 255, 255, 0.08)" },
    },
  },
  fg: {
    DEFAULT: {
      value: { _light: "#0F172A", _dark: NETFUSION_REFERENCE.textBodyDark },
    },
    muted: {
      value: { _light: "rgba(15, 23, 42, 0.65)", _dark: NETFUSION_REFERENCE.textMutedDark },
    },
    subtle: {
      value: { _light: "rgba(15, 23, 42, 0.45)", _dark: "rgba(255, 255, 255, 0.4)" },
    },
    inverse: { value: { _light: "#FFFFFF", _dark: darkBg } },
  },
  border: {
    DEFAULT: {
      value: { _light: "rgba(15, 23, 42, 0.12)", _dark: NETFUSION_REFERENCE.borderSubtle },
    },
    subtle: {
      value: { _light: "rgba(15, 23, 42, 0.06)", _dark: "rgba(255, 255, 255, 0.04)" },
    },
    emphasized: {
      value: { _light: "rgba(15, 23, 42, 0.2)", _dark: "rgba(255, 255, 255, 0.15)" },
    },
    strong: {
      value: { _light: "rgba(15, 23, 42, 0.35)", _dark: "rgba(255, 255, 255, 0.3)" },
    },
  },
  primary: {
    solid: { value: "{colors.primary.400}" },
    contrast: { value: "#FFFFFF" },
    fg: {
      value: { _light: "{colors.primary.400}", _dark: "{colors.primary.100}" },
    },
    muted: { value: "rgba(27, 38, 59, 0.15)" },
    subtle: { value: "rgba(27, 38, 59, 0.25)" },
    emphasized: { value: "{colors.primary.300}" },
    hover: { value: "{colors.primary.500}" },
    focusRing: { value: "{colors.success.200}" },
  },
  brand: {
    solid: { value: "{colors.brand.500}" },
    contrast: { value: darkBg },
    fg: { value: "{colors.brand.500}" },
    muted: { value: "rgba(2, 193, 115, 0.15)" },
    subtle: { value: "rgba(2, 193, 115, 0.25)" },
    hover: { value: "{colors.brand.400}" },
    focusRing: { value: NETFUSION_REFERENCE.shadowBrand },
  },
  /** @deprecated Prefer `brand.*` — kept for existing marketing components. */
  marketing: {
    solid: { value: "{colors.brand.500}" },
    contrast: { value: darkBg },
    fg: { value: "{colors.brand.500}" },
    muted: { value: "rgba(2, 193, 115, 0.15)" },
    subtle: { value: "rgba(2, 193, 115, 0.25)" },
    hover: { value: "{colors.brand.400}" },
    focusRing: { value: NETFUSION_REFERENCE.shadowBrand },
  },
  success: {
    solid: { value: "{colors.success.400}" },
    contrast: { value: "#FFFFFF" },
    fg: { value: "{colors.success.300}" },
    muted: { value: "rgba(64, 145, 108, 0.15)" },
    subtle: { value: "rgba(64, 145, 108, 0.3)" },
  },
  accent: {
    solid: { value: "{colors.accent.300}" },
    contrast: { value: "#111827" },
    fg: { value: "{colors.accent.400}" },
    muted: { value: "rgba(217, 119, 6, 0.15)" },
    subtle: { value: "rgba(217, 119, 6, 0.3)" },
  },
  highlight: {
    solid: { value: "{colors.highlight.400}" },
    fg: { value: "{colors.highlight.400}" },
    muted: {
      value: { _light: "rgba(234, 179, 8, 0.2)", _dark: "rgba(234, 179, 8, 0.15)" },
    },
  },
  overlay: {
    subtle: {
      value: { _light: "rgba(15, 23, 42, 0.05)", _dark: "rgba(255, 255, 255, 0.06)" },
    },
    DEFAULT: {
      value: { _light: "rgba(15, 23, 42, 0.08)", _dark: "rgba(255, 255, 255, 0.1)" },
    },
    emphasized: {
      value: { _light: "rgba(15, 23, 42, 0.1)", _dark: "rgba(255, 255, 255, 0.2)" },
    },
    strong: {
      value: { _light: "rgba(15, 23, 42, 0.16)", _dark: "rgba(255, 255, 255, 0.3)" },
    },
    fg: {
      value: { _light: "rgba(15, 23, 42, 0.82)", _dark: "rgba(255, 255, 255, 0.9)" },
    },
    fgMuted: {
      value: { _light: "rgba(15, 23, 42, 0.6)", _dark: "rgba(255, 255, 255, 0.7)" },
    },
    fgSubtle: {
      value: { _light: "rgba(15, 23, 42, 0.45)", _dark: "rgba(255, 255, 255, 0.55)" },
    },
  },
  danger: {
    solid: { value: "#DC2626" },
    contrast: { value: "#FFFFFF" },
    fg: { value: "#FCA5A5" },
    muted: { value: "rgba(220, 38, 38, 0.15)" },
    subtle: { value: "rgba(220, 38, 38, 0.3)" },
  },
  warning: {
    solid: { value: "{colors.accent.400}" },
    contrast: { value: "#FFFFFF" },
    fg: { value: "#FCD34D" },
    muted: { value: "rgba(234, 179, 8, 0.15)" },
    subtle: { value: "rgba(234, 179, 8, 0.3)" },
  },
  gray: {
    fg: { value: { _light: "{colors.gray.700}", _dark: "{colors.gray.100}" } },
    contrast: { value: "#FFFFFF" },
    subtle: {
      value: { _light: "rgba(15, 23, 42, 0.06)", _dark: "rgba(255, 255, 255, 0.06)" },
    },
    muted: {
      value: { _light: "rgba(15, 23, 42, 0.1)", _dark: "rgba(255, 255, 255, 0.1)" },
    },
    emphasized: {
      value: { _light: "rgba(15, 23, 42, 0.14)", _dark: "rgba(255, 255, 255, 0.14)" },
    },
    border: {
      value: { _light: "rgba(15, 23, 42, 0.15)", _dark: "rgba(255, 255, 255, 0.15)" },
    },
  },
} as const;
