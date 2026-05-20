import { Box, type BoxProps } from "@chakra-ui/react";

export type StickyGlassHeaderProps = BoxProps;

/**
 * Sticky top bar used on AthleteIQ dashboards — glass background, border, shadow.
 * Slot brand + actions as children.
 */
export function StickyGlassHeader({ children, ...props }: StickyGlassHeaderProps) {
  return (
    <Box
      as="header"
      bg="bg.glass"
      backdropFilter="blur(16px)"
      color="fg.DEFAULT"
      px="4"
      py="4"
      position="sticky"
      top="0"
      zIndex={50}
      borderBottomWidth="1px"
      borderColor="border.DEFAULT"
      boxShadow="sm"
      {...props}
    >
      {children}
    </Box>
  );
}
