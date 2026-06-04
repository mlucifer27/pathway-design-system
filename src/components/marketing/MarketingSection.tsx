import { Box, Container, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { marketingSectionPy } from "./section-spacing";

export type MarketingSectionSurface = "default" | "band" | "spotlight";

export type MarketingSectionProps = {
  children: ReactNode;
  maxW?: BoxProps["maxW"];
  animate?: boolean;
  id?: string;
  /** Light-mode section rhythm — banded strips break up flat white fields. */
  surface?: MarketingSectionSurface;
};

const SURFACE_CLASS: Record<MarketingSectionSurface, string | undefined> = {
  default: undefined,
  band: "marketing-section-band",
  spotlight: "marketing-section-spotlight",
};

/** Shared public-page section shell — canvas, 6xl container, Netfusion vertical rhythm. */
export function MarketingSection({
  children,
  maxW = "6xl",
  animate = true,
  id,
  surface = "default",
}: MarketingSectionProps) {
  const surfaceClass = SURFACE_CLASS[surface];
  const sectionClass = [animate ? "animate-fade-up" : undefined, surfaceClass]
    .filter(Boolean)
    .join(" ");

  return (
    <Box
      as="section"
      id={id}
      py={marketingSectionPy}
      px="4"
      className={sectionClass || undefined}
    >
      <Container maxW={maxW} mx="auto">
        {children}
      </Container>
    </Box>
  );
}
