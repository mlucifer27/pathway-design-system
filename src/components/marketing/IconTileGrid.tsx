import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import type { ElementType, ReactNode } from "react";
import { netfusionMotionDelay } from "./netfusion-motion";
import { MarketingSection } from "./MarketingSection";
import { SectionHeaderBlock } from "./SectionHeaderBlock";

export type IconTileItem = {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  iconBg?: string;
};

export type IconTileGridProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  items: IconTileItem[];
  columns?: { base?: number; md?: number; lg?: number };
  footer?: ReactNode;
};

/** Netfusion `.feature-area` + `.te-info-card.style-3` tiles (not glass / solid green blocks). */
export function IconTileGrid({
  shortLabel,
  title,
  description,
  items,
  columns = { base: 1, md: 2, lg: 4 },
  footer,
}: IconTileGridProps) {
  const templateColumns = {
    base: `repeat(${columns.base ?? 1}, 1fr)`,
    md: columns.md ? `repeat(${columns.md}, 1fr)` : undefined,
    lg: columns.lg ? `repeat(${columns.lg}, 1fr)` : undefined,
  };

  return (
    <MarketingSection animate={false} surface="band">
      <SectionHeaderBlock
        shortLabel={shortLabel}
        title={title}
        description={description}
        align="center"
      />
      <Grid templateColumns={templateColumns} gap={{ base: "6", md: "8" }}>
        {items.map((item, index) => (
          <Box
            key={item.id}
            className="netfusion-info-card animate-fade-up"
            style={{ animationDelay: netfusionMotionDelay(index) }}
          >
            <Flex direction="column" align="flex-start" gap="4" h="full">
              <Flex className="netfusion-icon-box">
                <Icon as={item.icon} boxSize="7" aria-hidden />
              </Flex>
              <Heading
                as="h4"
                fontSize="24px"
                fontWeight="500"
                lineHeight="31px"
                color="fg.DEFAULT"
                mb="0"
              >
                {item.title}
              </Heading>
              <Text color="fg.DEFAULT" fontSize="md" lineHeight="24px">
                {item.description}
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>
      {footer}
    </MarketingSection>
  );
}
