import { Box, Text, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { GlassPanel } from "./GlassPanel";

export type EmptyStatePanelProps = BoxProps & {
  title: string;
  description?: string;
  icon?: ReactNode;
};

/**
 * Centered glass empty state for lists, tables, and dashboards.
 */
export function EmptyStatePanel({
  title,
  description,
  icon,
  children,
  ...props
}: EmptyStatePanelProps) {
  return (
    <GlassPanel p="8" textAlign="center" {...props}>
      {icon !== undefined && icon !== null ? (
        <Box color="fg.muted" display="inline-flex" mb="3" mx="auto">
          {icon}
        </Box>
      ) : null}
      <Text fontWeight="bold" color="fg.DEFAULT">
        {title}
      </Text>
      {description !== undefined && description.length > 0 ? (
        <Text color="fg.muted" fontSize="sm" mt="1">
          {description}
        </Text>
      ) : null}
      {children}
    </GlassPanel>
  );
}
