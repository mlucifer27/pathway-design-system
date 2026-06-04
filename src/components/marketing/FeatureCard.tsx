import Link from "next/link";
import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BrandButtonOutline } from "../primitives/BrandButton";
import type { ElementType, ReactNode } from "react";
import { netfusionMotionDelay } from "./netfusion-motion";
import { MarketingSection } from "./MarketingSection";
import { SectionHeaderBlock } from "./SectionHeaderBlock";

export type FeatureCardItem = {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  icon?: ElementType;
  iconBg?: string;
  badge?: string;
  badgeVariant?: "live" | "muted";
  href?: string;
  ctaLabel?: string;
  external?: boolean;
  disabled?: boolean;
};

export type FeatureCardProps = FeatureCardItem;

/** Netfusion `.latest-service-card` */
export function FeatureCard({
  title,
  tagline,
  description,
  icon: IconComponent,
  iconBg: _iconBg,
  badge,
  badgeVariant = "muted",
  href,
  ctaLabel,
  external,
  disabled,
  stacked: _stacked = true,
}: FeatureCardProps & { stacked?: boolean }) {
  return (
    <Box className="glass-panel marketing-feature-card" rounded="panel" p={{ base: "8", md: "10" }} h="full">
      <Flex align="flex-start" gap={{ base: "4", md: "8" }} direction={{ base: "column", md: "row" }}>
        {IconComponent ? (
          <Flex
            className="netfusion-icon-box"
            boxSize={{ base: "16", md: "24" }}
            align="center"
            justify="center"
            flexShrink={0}
          >
            <Icon as={IconComponent} boxSize={{ base: "7", md: "10" }} aria-hidden />
          </Flex>
        ) : null}
        <Box flex="1">
          <Flex align="center" gap="2" mb="2" wrap="wrap">
            <Heading as="h3" fontSize="xl" fontWeight="500" color="fg.heading" lineHeight="initial">
              {title}
            </Heading>
            {badge ? (
              <Badge
                bg={badgeVariant === "live" ? "brand.solid" : "transparent"}
                color={badgeVariant === "live" ? "brand.contrast" : "fg.muted"}
                borderWidth={badgeVariant === "live" ? "0" : "1px"}
                borderColor="border.subtle"
                fontSize="xs"
                fontWeight="600"
                px="2"
                py="1"
                rounded="full"
              >
                {badge}
              </Badge>
            ) : null}
          </Flex>
          {tagline ? (
            <Text color="fg.muted" fontWeight="600" fontSize="sm" mb="2">
              {tagline}
            </Text>
          ) : null}
          <Text color="fg.DEFAULT" fontSize="md" lineHeight="24px" mb="4">
            {description}
          </Text>
          {ctaLabel && href && !disabled ? (
            <BrandButtonOutline asChild size="sm">
              <Link
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {ctaLabel}
              </Link>
            </BrandButtonOutline>
          ) : ctaLabel && disabled ? (
            <BrandButtonOutline size="sm" disabled>
              {ctaLabel}
            </BrandButtonOutline>
          ) : null}
        </Box>
      </Flex>
    </Box>
  );
}

export type FeatureCardGridProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  items: FeatureCardItem[];
  columns?: { base?: number; md?: number; lg?: number };
  footer?: ReactNode;
};

export function FeatureCardGrid({
  shortLabel,
  title,
  description,
  items,
  columns = { base: 1, md: 2 },
  footer,
}: FeatureCardGridProps) {
  const templateColumns = {
    base: `repeat(${columns.base ?? 1}, 1fr)`,
    md: columns.md ? `repeat(${columns.md}, 1fr)` : undefined,
    lg: columns.lg ? `repeat(${columns.lg}, 1fr)` : undefined,
  };
  const useGrid = (columns.md ?? 1) > 1 || (columns.lg ?? 1) > 1;

  return (
    <MarketingSection animate={false}>
      <SectionHeaderBlock
        shortLabel={shortLabel}
        title={title}
        description={description}
        align="center"
      />
      {useGrid ? (
        <Grid templateColumns={templateColumns} gap="8">
          {items.map((item, index) => (
            <Box
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: netfusionMotionDelay(index) }}
            >
              <FeatureCard {...item} stacked={false} />
            </Box>
          ))}
        </Grid>
      ) : (
        <Stack gap="30px">
          {items.map((item, index) => (
            <Box
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: netfusionMotionDelay(index) }}
            >
              <FeatureCard {...item} stacked />
            </Box>
          ))}
        </Stack>
      )}
      {footer}
    </MarketingSection>
  );
}
