import type { ButtonProps } from "@chakra-ui/react";
import { BrandButtonOutline, BrandButtonSolid } from "../primitives/BrandButton";

/** @deprecated Prefer `BrandButtonSolid` from `@pathway-sg/design-system/primitives`. */
export function MarketingButtonSolid(props: ButtonProps) {
  return <BrandButtonSolid {...props} />;
}

/** @deprecated Prefer `BrandButtonOutline` from `@pathway-sg/design-system/primitives`. */
export function MarketingButtonOutline(props: ButtonProps) {
  return <BrandButtonOutline {...props} />;
}
