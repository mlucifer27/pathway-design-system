import type { ButtonProps, InputProps } from "@chakra-ui/react";

/** Inputs on public auth cards — brand focus ring matches Netfusion CTAs. */
export const authInputProps: InputProps = {
  px: "4",
  py: "3",
  rounded: "xl",
  bg: "bg.elevated",
  color: "fg.DEFAULT",
  borderWidth: "1px",
  borderColor: "border.emphasized",
  _placeholder: { color: "fg.subtle" },
  _focusVisible: {
    borderColor: "brand.solid",
    outline: "2px solid",
    outlineColor: "brand.focusRing",
    outlineOffset: "2px",
  },
};

export const authGoogleButtonProps: ButtonProps = {
  w: "full",
  py: "3",
  h: "auto",
  mb: "6",
  variant: "outline",
  bg: "bg.elevated",
  color: "fg.DEFAULT",
  borderWidth: "1px",
  borderColor: "border.emphasized",
  rounded: "xl",
  fontWeight: "semibold",
  fontSize: "sm",
  _hover: { bg: "bg.glassHover", borderColor: "border.strong" },
  _disabled: { opacity: 0.6, cursor: "not-allowed" },
};

export const authSubmitButtonProps: ButtonProps = {
  w: "full",
  py: "4",
  h: "auto",
  rounded: "xl",
  fontSize: "lg",
  fontWeight: "900",
  bg: "brand.solid",
  color: "brand.contrast",
  _hover: { bg: "brand.hover" },
  _disabled: { opacity: 0.6, cursor: "not-allowed" },
};

export const authLinkProps = {
  color: "brand.fg",
  fontWeight: "semibold",
  _hover: { color: "fg.DEFAULT", textDecoration: "underline" },
} as const;
