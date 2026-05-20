import { NETFUSION_REFERENCE } from "./netfusion-reference";

/** Raw palette — `brand.500` is Netfusion `$primary-color`. */
export const pathwayColorTokens = {
  primary: {
    50: { value: "#EAF0F6" },
    100: { value: "#C7D4E5" },
    200: { value: "#8EA9C9" },
    300: { value: "#4A6A8A" },
    400: { value: "#1B263B" },
    500: { value: "#121B2A" },
  },
  brand: {
    50: { value: "#E6FBF3" },
    100: { value: "#B3F0D9" },
    200: { value: "#66E0B3" },
    300: { value: "#33D696" },
    400: { value: "#02A862" },
    500: { value: NETFUSION_REFERENCE.primaryColor },
  },
  success: {
    50: { value: "#E8F5EC" },
    100: { value: "#B7E4C7" },
    200: { value: "#74C69D" },
    300: { value: "#40916C" },
    400: { value: "#1B4332" },
  },
  accent: {
    50: { value: "#FFF4E8" },
    100: { value: "#FFE0B8" },
    200: { value: "#FFC078" },
    300: { value: "#F4A261" },
    400: { value: "#D97706" },
  },
  gray: {
    50: { value: "#F8FAFC" },
    100: { value: "#F1F5F9" },
    200: { value: "#E2E8F0" },
    300: { value: "#CBD5E1" },
    400: { value: "#94A3B8" },
    500: { value: "#64748B" },
    600: { value: "#475569" },
    700: { value: "#334155" },
    800: { value: "#1E293B" },
    900: { value: "#0F172A" },
  },
  highlight: {
    300: { value: "#FACC15" },
    400: { value: "#EAB308" },
  },
} as const;
