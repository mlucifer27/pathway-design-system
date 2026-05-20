import Link from "next/link";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MarketingButtonOutline, MarketingButtonSolid } from "./MarketingButton";
import type { ElementType, ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";
import { marketingSectionPy } from "./section-spacing";

export type PricingTierCardProps = {
  who?: string;
  name: string;
  price: string;
  priceSuffix?: string;
  tagline?: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  ctaLoading?: boolean;
  checkIcon?: ElementType;
};

/** Netfusion `_price-card` */
export function PricingTierCard({
  who,
  name,
  price,
  priceSuffix,
  tagline,
  features,
  highlight = false,
  badge,
  ctaLabel = "Get Started",
  ctaHref,
  onCtaClick,
  ctaLoading,
  checkIcon: CheckIcon,
}: PricingTierCardProps) {
  return (
    <Box
      className={highlight ? undefined : "glass-panel"}
      p="6"
      rounded="card"
      borderWidth={highlight ? "2px" : "1px"}
      borderColor={highlight ? "marketing.solid" : "border.subtle"}
      bg={highlight ? "bg.section" : undefined}
      boxShadow={highlight ? "brand" : undefined}
      position="relative"
    >
      {badge ? (
        <Text fontSize="xs" fontWeight="bold" color="marketing.fg" mb="4">
          {badge}
        </Text>
      ) : null}
      {who ? (
        <Text fontSize="xs" fontWeight="bold" mb="1" color="fg.muted">
          {who}
        </Text>
      ) : null}
      <Heading as="h4" fontSize="xl" fontWeight="900" mb="1" className="marketing-heading">
        {name}
      </Heading>
      <Text fontSize="3xl" fontWeight="900" mb={tagline ? "1" : "6"} color="fg.DEFAULT">
        {price}
        {priceSuffix ? (
          <Text as="span" fontSize="lg" fontWeight="normal">
            {priceSuffix}
          </Text>
        ) : null}
      </Text>
      {tagline ? (
        <Text fontSize="xs" color="fg.subtle" mb="6">
          {tagline}
        </Text>
      ) : null}
      <Stack as="ul" gap="2" mb="6" listStyleType="none">
        {features.map((feature) => (
          <Flex
            as="li"
            key={feature}
            fontSize="sm"
            align="flex-start"
            gap="2"
            color="fg.muted"
          >
            {CheckIcon ? (
              <Icon as={CheckIcon} color="marketing.fg" mt="0.5" flexShrink={0} aria-hidden />
            ) : null}
            {feature}
          </Flex>
        ))}
      </Stack>
      {ctaHref ? (
        highlight ? (
          <MarketingButtonSolid asChild w="full">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </MarketingButtonSolid>
        ) : (
          <MarketingButtonOutline asChild w="full">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </MarketingButtonOutline>
        )
      ) : highlight ? (
        <MarketingButtonSolid
          w="full"
          onClick={onCtaClick}
          loading={ctaLoading}
          disabled={ctaLoading}
        >
          {ctaLabel}
        </MarketingButtonSolid>
      ) : (
        <MarketingButtonOutline
          w="full"
          onClick={onCtaClick}
          loading={ctaLoading}
          disabled={ctaLoading}
        >
          {ctaLabel}
        </MarketingButtonOutline>
      )}
    </Box>
  );
}

export type PricingGridProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  tiers: PricingTierCardProps[];
  columns?: { base?: number; md?: number; lg?: number };
  checkIcon?: ElementType;
  headerExtra?: ReactNode;
};

export function PricingGrid({
  shortLabel,
  title,
  description,
  tiers,
  columns = { base: 1, md: 3 },
  checkIcon,
  headerExtra,
}: PricingGridProps) {
  const templateColumns = {
    base: `repeat(${columns.base ?? 1}, 1fr)`,
    md: columns.md ? `repeat(${columns.md}, 1fr)` : undefined,
    lg: columns.lg ? `repeat(${columns.lg}, 1fr)` : undefined,
  };

  return (
    <Box as="section" py={marketingSectionPy} px="4">
      <Box maxW="6xl" mx="auto">
        <SectionHeader shortLabel={shortLabel} title={title} description={description} />
        {headerExtra}
        <Grid templateColumns={templateColumns} gap="8">
          {tiers.map((tier) => (
            <PricingTierCard key={tier.name} {...tier} checkIcon={checkIcon} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
