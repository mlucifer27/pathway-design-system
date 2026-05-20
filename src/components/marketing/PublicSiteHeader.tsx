import Link from "next/link";
import { Box, Container, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { MarketingButtonOutline, MarketingButtonSolid } from "./MarketingButton";

export type PublicSiteHeaderCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type PublicSiteHeaderProps = {
  brandTitle: string;
  brandTagline: string;
  homeHref?: string;
  authenticated?: boolean;
  authenticatedCta?: PublicSiteHeaderCta;
  secondaryCta?: PublicSiteHeaderCta;
  primaryCta?: PublicSiteHeaderCta;
};

function ctaLinkProps(external?: boolean) {
  return external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
}

/** Netfusion HeaderV1 — sticky glass bar */
export function PublicSiteHeader({
  brandTitle,
  brandTagline,
  homeHref = "/",
  authenticated = false,
  authenticatedCta,
  secondaryCta,
  primaryCta,
}: PublicSiteHeaderProps) {
  return (
    <Box
      as="header"
      bg="bg.glass"
      backdropFilter="blur(16px)"
      borderBottomWidth="1px"
      borderColor="border.DEFAULT"
      position="sticky"
      top="0"
      zIndex="50"
    >
      <Container maxW="6xl" py="4" px="4">
        <Flex align="center" justify="space-between">
          <Link href={homeHref}>
            <Box>
              <Heading
                as="p"
                className="marketing-heading"
                fontSize="2xl"
                fontWeight="900"
                color="fg.DEFAULT"
                letterSpacing="tight"
              >
                {brandTitle}
              </Heading>
              <Text fontSize="xs" color="fg.muted" mt="-1">
                {brandTagline}
              </Text>
            </Box>
          </Link>
          <HStack gap="3">
            {authenticated && authenticatedCta ? (
              <MarketingButtonSolid asChild size="sm">
                <Link
                  href={authenticatedCta.href}
                  {...ctaLinkProps(authenticatedCta.external)}
                >
                  {authenticatedCta.label}
                </Link>
              </MarketingButtonSolid>
            ) : (
              <>
                {secondaryCta ? (
                  <MarketingButtonOutline asChild size="sm">
                    <Link
                      href={secondaryCta.href}
                      data-theme="button"
                      {...ctaLinkProps(secondaryCta.external)}
                    >
                      {secondaryCta.label}
                    </Link>
                  </MarketingButtonOutline>
                ) : null}
                {primaryCta ? (
                  <MarketingButtonSolid asChild size="sm">
                    <Link
                      href={primaryCta.href}
                      {...ctaLinkProps(primaryCta.external)}
                    >
                      {primaryCta.label}
                    </Link>
                  </MarketingButtonSolid>
                ) : null}
              </>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
