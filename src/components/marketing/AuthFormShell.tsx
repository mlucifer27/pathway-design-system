import { Box, Flex, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type AuthFormShellProps = {
  children: ReactNode;
  maxW?: BoxProps["maxW"];
};

/** Vertically centered auth card — Netfusion contact/login panel density. */
export function AuthFormShell({ children, maxW = "md" }: AuthFormShellProps) {
  return (
    <Flex
      w="full"
      flex="1"
      align="center"
      justify="center"
      px="4"
      py={{ base: "8", md: "12" }}
      minH="0"
    >
      <Box w="full" maxW={maxW} className="auth-panel" p={{ base: "7", md: "10" }}>
        {children}
      </Box>
    </Flex>
  );
}
