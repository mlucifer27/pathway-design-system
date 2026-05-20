import Link from "next/link";
import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { MarketingButtonOutline } from "./MarketingButton";
import type { ElementType, ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";
import { marketingSectionPy } from "./section-spacing";

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

export function FeatureCard({
  title,
  tagline,
  description,
  icon: IconComponent,
  iconBg = "marketing.solid",
  badge,
  badgeVariant = "muted",
  href,
  ctaLabel,
  external,
  disabled,
}: FeatureCardProps) {
  return (
    <Box className="glass-panel" rounded="card" p="6">
      <Flex align="flex-start" gap="4">
        {IconComponent ? (
          <Flex
            bg={iconBg}
            color="marketing.contrast"
            boxSize="14"
            rounded="card"
            align="center"
            justify="center"
            fontSize="2xl"
            flexShrink={0}
          >
            <Icon as={IconComponent} aria-hidden />
          </Flex>
        ) : null}
        <Box flex="1">
          <Flex align="center" gap="2" mb="1" wrap="wrap">
            <Heading as="h4" fontWeight="900" fontSize="xl" className="marketing-heading">
              {title}
            </Heading>
            {badge ? (
              <Badge
                bg={badgeVariant === "live" ? "marketing.muted" : "bg.glass"}
                color={badgeVariant === "live" ? "marketing.fg" : "fg.muted"}
                fontSize="xs"
                fontWeight="bold"
                px="2"
                py="1"
                rounded="full"
              >
                {badge}
              </Badge>
            ) : null}
          </Flex>
          {tagline ? (
            <Text color="fg.muted" fontWeight="semibold" fontSize="sm" mb="2">
              {tagline}
            </Text>
          ) : null}
          <Text color="fg.muted" fontSize="sm" lineHeight="relaxed" mb="4">
            {description}
          </Text>
          {ctaLabel && href && !disabled ? (
            <MarketingButtonOutline asChild size="sm">
              <Link
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {ctaLabel}
              </Link>
            </MarketingButtonOutline>
          ) : ctaLabel && disabled ? (
            <MarketingButtonOutline size="sm" disabled>
              {ctaLabel}
            </MarketingButtonOutline>
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

  return (
    <Box as="section" py={marketingSectionPy} px="4">
      <Box maxW="6xl" mx="auto">
        <SectionHeader shortLabel={shortLabel} title={title} description={description} />
        <Grid templateColumns={templateColumns} gap="6">
          {items.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </Grid>
        {footer}
      </Box>
    </Box>
  );
}
