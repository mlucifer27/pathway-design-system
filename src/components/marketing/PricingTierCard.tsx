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
import { BrandButtonOutline, BrandButtonSolid } from "../primitives/BrandButton";
import type { ElementType, ReactNode } from "react";
import { SectionHeaderBlock } from "./SectionHeaderBlock";
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

/** Netfusion `.price-card` */
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
      className={highlight ? undefined : "netfusion-price-card"}
      p={{ base: "6", md: "8" }}
      rounded={highlight ? "sm" : "sm"}
      borderWidth="1px"
      borderColor="border.subtle"
      bg={highlight ? "bg.card" : "bg.card"}
      position="relative"
      h="full"
    >
      {badge ? (
        <Text fontSize="sm" fontWeight="600" color="brand.fg" mb="4">
          {badge}
        </Text>
      ) : null}
      {who ? (
        <Text fontSize="xs" fontWeight="600" mb="1" color="fg.muted">
          {who}
        </Text>
      ) : null}
      <Heading as="h4" fontSize="xl" fontWeight="700" mb="1" color="fg.heading">
        {name}
      </Heading>
      <Text fontSize="3xl" fontWeight="700" mb={tagline ? "1" : "6"} color="fg.heading">
        {price}
        {priceSuffix ? (
          <Text as="span" fontSize="lg" fontWeight="normal" color="fg.muted">
            {priceSuffix}
          </Text>
        ) : null}
      </Text>
      {tagline ? (
        <Text fontSize="xs" color="fg.muted" mb="6">
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
            color="fg.DEFAULT"
          >
            {CheckIcon ? (
              <Icon as={CheckIcon} color="brand.fg" mt="0.5" flexShrink={0} aria-hidden />
            ) : null}
            {feature}
          </Flex>
        ))}
      </Stack>
      {ctaHref ? (
        highlight ? (
          <BrandButtonSolid asChild w="full">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </BrandButtonSolid>
        ) : (
          <BrandButtonOutline asChild w="full">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </BrandButtonOutline>
        )
      ) : highlight ? (
        <BrandButtonSolid
          w="full"
          onClick={onCtaClick}
          loading={ctaLoading}
          disabled={ctaLoading}
        >
          {ctaLabel}
        </BrandButtonSolid>
      ) : (
        <BrandButtonOutline
          w="full"
          onClick={onCtaClick}
          loading={ctaLoading}
          disabled={ctaLoading}
        >
          {ctaLabel}
        </BrandButtonOutline>
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
        <SectionHeaderBlock shortLabel={shortLabel} title={title} description={description} align="center" />
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
