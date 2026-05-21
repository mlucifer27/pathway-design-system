import { Box, Container, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { marketingSectionPy } from "./section-spacing";

export type MarketingSectionProps = {
  children: ReactNode;
  maxW?: BoxProps["maxW"];
  animate?: boolean;
  id?: string;
};

/** Shared public-page section shell — `#060606` canvas, 6xl container, Netfusion vertical rhythm. */
export function MarketingSection({
  children,
  maxW = "6xl",
  animate = true,
  id,
}: MarketingSectionProps) {
  return (
    <Box
      as="section"
      id={id}
      py={marketingSectionPy}
      px="4"
      className={animate ? "animate-fade-up" : undefined}
    >
      <Container maxW={maxW} mx="auto">
        {children}
      </Container>
    </Box>
  );
}
