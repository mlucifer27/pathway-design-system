import { Box, Flex, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type AuthFormShellProps = {
  children: ReactNode;
  maxW?: BoxProps["maxW"];
};

/** Centered glass card for `(auth)` routes — matches platform auth layout. */
export function AuthFormShell({ children, maxW = "md" }: AuthFormShellProps) {
  return (
    <Flex align="center" justify="center" px="4" py="12">
      <Box w="full" maxW={maxW} className="glass-panel" p={{ base: "6", md: "8" }}>
        {children}
      </Box>
    </Flex>
  );
}
