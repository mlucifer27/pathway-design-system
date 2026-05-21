import { Box, Text, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { GlassPanel } from "./GlassPanel";

export type StatCardProps = BoxProps & {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
};

/**
 * Dashboard stat tile — glass surface with label, value, and optional icon.
 */
export function StatCard({ label, value, icon, children, ...props }: StatCardProps) {
  return (
    <GlassPanel
      rounded="2xl"
      p="4"
      textAlign="center"
      borderWidth="1px"
      borderColor="border.subtle"
      boxShadow="sm"
      {...props}
    >
      {icon !== undefined && icon !== null ? (
        <Box color="fg.muted" display="inline-flex" mb="1">
          {icon}
        </Box>
      ) : null}
      {typeof value === "string" || typeof value === "number" ? (
        <Text fontWeight="900" color="fg.DEFAULT" fontSize="lg">
          {value}
        </Text>
      ) : (
        value
      )}
      <Text color="fg.muted" fontSize="xs">
        {label}
      </Text>
      {children}
    </GlassPanel>
  );
}
