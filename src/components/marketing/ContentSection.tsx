import { Box, Container } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";
import { marketingSectionPy } from "./section-spacing";

export type ContentSectionProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "surface";
};

/** Netfusion AboutV1 — centered mission / split content */
export function ContentSection({
  shortLabel,
  title,
  description,
  children,
  variant = "default",
}: ContentSectionProps) {
  return (
    <Box
      as="section"
      py={marketingSectionPy}
      px="4"
      bg={variant === "surface" ? "bg.section" : undefined}
    >
      <Container maxW="4xl">
        <SectionHeader
          shortLabel={shortLabel}
          title={title}
          description={description}
          align="center"
        />
        {children}
      </Container>
    </Box>
  );
}
