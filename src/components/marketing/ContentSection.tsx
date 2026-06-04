import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { MarketingSection } from "./MarketingSection";
import { SectionHeaderBlock } from "./SectionHeaderBlock";

export type ContentSectionProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

/** Netfusion About copy block — centered title, prose width. */
export function ContentSection({
  shortLabel,
  title,
  description,
  children,
}: ContentSectionProps) {
  return (
    <MarketingSection maxW="4xl" animate={false} surface="band">
      <SectionHeaderBlock
        shortLabel={shortLabel}
        title={title}
        description={description}
        align="center"
      />
      {children ? (
        <Box className="animate-fade-up" style={{ animationDelay: "200ms" }}>
          {children}
        </Box>
      ) : null}
    </MarketingSection>
  );
}
