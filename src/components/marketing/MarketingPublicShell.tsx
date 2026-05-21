import { Box, Flex, type FlexProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { MarketingBackgroundOrbs } from "./MarketingBackgroundOrbs";

export type MarketingPublicShellProps = {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  orbsVariant?: "global" | "auth";
  resolvedTheme: "light" | "dark";
  mainProps?: FlexProps;
};

/** Landing + auth share one canvas: `#060606`, optional orb, sticky header, centered main. */
export function MarketingPublicShell({
  header,
  children,
  footer,
  orbsVariant = "global",
  resolvedTheme,
  mainProps,
}: MarketingPublicShellProps) {
  return (
    <Flex direction="column" minH="100vh" w="full" bg="bg.DEFAULT" position="relative">
      <MarketingBackgroundOrbs variant={orbsVariant} resolvedTheme={resolvedTheme} />
      {header}
      <Flex as="main" flex="1" w="full" direction="column" position="relative" zIndex={1} {...mainProps}>
        {children}
      </Flex>
      {footer ? <Box position="relative" zIndex={1}>{footer}</Box> : null}
    </Flex>
  );
}
