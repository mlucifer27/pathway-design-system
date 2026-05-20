import { Box, type BoxProps } from "@chakra-ui/react";

export type GlassPanelProps = BoxProps;

/**
 * Surfaces that use theme `bg.glass` + `.glass-panel` global styles.
 * Prefer this over sprinkling `className="glass-panel"` for consistent defaults.
 */
export function GlassPanel({ className, rounded = "card", ...props }: GlassPanelProps) {
  const mergedClass = className ? `glass-panel ${className}` : "glass-panel";

  return <Box className={mergedClass} rounded={rounded} {...props} />;
}
