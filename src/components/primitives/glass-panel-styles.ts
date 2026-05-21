import type {
  BadgeProps,
  BoxProps,
  ButtonProps,
  TableRowProps,
  TextProps,
} from "@chakra-ui/react";
import { NETFUSION_REFERENCE } from "../../tokens/netfusion-reference";

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

/** Shared glass surface for inputs, textareas, and native selects (not full panels). */
export const glassPanelFieldProps = {
  bg: "bg.glass",
  backdropFilter: "blur(6.5px)",
  borderWidth: "1px",
  borderColor: "border.netfusion",
  boxShadow: NETFUSION_REFERENCE.glassShadow,
  color: "fg.DEFAULT",
} satisfies BoxProps;

/** Compact glass chip (e.g. status badges on dashboard cards). */
export const glassPanelBadgeProps: BadgeProps = {
  bg: "bg.glass",
  backdropFilter: "blur(6.5px)",
  borderWidth: "1px",
  borderColor: "border.netfusion",
  boxShadow: NETFUSION_REFERENCE.glassShadow,
};

/** Table header row on glass-backed data tables. */
export const glassPanelTableHeaderProps: TableRowProps = {
  bg: "bg.glass",
  backdropFilter: "blur(6.5px)",
  borderBottomWidth: "1px",
  borderColor: "border.netfusion",
};
