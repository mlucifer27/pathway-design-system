import { NETFUSION_REFERENCE } from "./netfusion-reference";

export const pathwayShadowTokens = {
  xs: { value: "0 1px 2px rgba(15, 23, 42, 0.04)" },
  sm: { value: "0 2px 4px rgba(15, 23, 42, 0.06)" },
  md: { value: "0 4px 10px rgba(15, 23, 42, 0.08)" },
  lg: { value: "0 10px 25px rgba(15, 23, 42, 0.10)" },
  xl: { value: "0 20px 40px rgba(15, 23, 42, 0.12)" },
  outline: { value: "0 0 0 3px rgba(2, 193, 115, 0.35)" },
  brand: { value: `0 8px 32px ${NETFUSION_REFERENCE.shadowBrand}` },
} as const;
