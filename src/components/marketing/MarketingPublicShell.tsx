import { Box, Flex, type FlexProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { NETFUSION_REFERENCE } from "../../tokens/netfusion-reference";
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
  const isLight = resolvedTheme === "light";

  return (
    <Flex
      direction="column"
      minH="100vh"
      w="full"
      bg="bg.DEFAULT"
      backgroundImage={isLight ? NETFUSION_REFERENCE.lightCanvasGradient : undefined}
      backgroundAttachment="fixed"
      backgroundSize="cover"
      position="relative"
    >
      <MarketingBackgroundOrbs variant={orbsVariant} resolvedTheme={resolvedTheme} />
      {header}
      <Flex as="main" flex="1" w="full" direction="column" position="relative" zIndex={1} {...mainProps}>
        {children}
      </Flex>
      {footer ? <Box position="relative" zIndex={1}>{footer}</Box> : null}
    </Flex>
  );
}
