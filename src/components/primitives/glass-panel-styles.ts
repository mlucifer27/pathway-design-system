import type { ButtonProps, TextProps } from "@chakra-ui/react";

/** Body / caption text on dark glass panels (WCAG-friendly on `bg.glass`). */
export const glassPanelMutedTextProps: TextProps = {
  color: "fg.muted",
};

/** Smaller supporting text on glass panels. */
export const glassPanelCaptionTextProps: TextProps = {
  color: "overlay.fgSubtle",
  fontSize: "xs",
};

/**
 * CTA on glass panels. Use on `Button` instead of `className="glass-panel"` —
 * the default solid variant paints an opaque surface and hides the label.
 */
export const glassPanelButtonProps: ButtonProps = {
  variant: "outline",
  bg: "bg.glass",
  color: "fg.DEFAULT",
  borderWidth: "1px",
  borderColor: "border.emphasized",
  fontWeight: "bold",
  _hover: {
    bg: "bg.glassHover",
    borderColor: "border.strong",
    color: "fg.DEFAULT",
  },
};
