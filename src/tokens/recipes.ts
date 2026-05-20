import { NETFUSION_REFERENCE } from "./netfusion-reference";

const brandTransition = NETFUSION_REFERENCE.transitionDefault;

export const pathwayRecipes = {
  button: {
    variants: {
      variant: {
        solid: {
          bg: "primary.solid",
          color: "primary.contrast",
          _hover: { bg: "primary.hover" },
        },
        ghost: { color: "fg.DEFAULT" },
        outline: {
          color: "fg.DEFAULT",
          borderColor: "border.emphasized",
          bg: "bg.elevated",
          _hover: { bg: "bg.glassHover", borderColor: "border.strong" },
        },
        plain: { color: "fg.DEFAULT" },
        solidBrand: {
          bg: "brand.solid",
          color: "brand.contrast",
          rounded: "control",
          fontWeight: "bold",
          transition: `all ${brandTransition}`,
          _hover: { bg: "brand.hover" },
        },
        outlineBrand: {
          color: "brand.fg",
          borderWidth: "1px",
          borderColor: "brand.solid",
          bg: "transparent",
          rounded: "sm",
          fontWeight: "bold",
          transition: `all ${brandTransition}`,
          _hover: {
            bg: "brand.solid",
            color: "brand.contrast",
            borderColor: "brand.solid",
          },
        },
      },
    },
  },
  input: {
    base: {
      bg: "bg.elevated",
      color: "fg.DEFAULT",
      borderWidth: "1px",
      borderColor: "border.emphasized",
      _placeholder: { color: "fg.subtle" },
    },
  },
} as const;
