import Link from "next/link";
import { Box, Container, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { BrandButtonOutline, BrandButtonSolid } from "../primitives/BrandButton";

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

/** Netfusion header — glass bar, `.te-theme-btn` CTAs */
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
      className="glass-panel"
      borderRadius="0"
      borderTopWidth="0"
      borderLeftWidth="0"
      borderRightWidth="0"
      position="sticky"
      top="0"
      zIndex="50"
    >
      <Container maxW="6xl" py="4" px="4">
        <Flex align="center" justify="space-between" gap="4">
          <Link href={homeHref}>
            <Box>
              <Heading as="p" fontSize="2xl" fontWeight="700" color="fg.heading" letterSpacing="tight">
                {brandTitle}
              </Heading>
              <Text fontSize="xs" color="fg.muted" mt="-1">
                {brandTagline}
              </Text>
            </Box>
          </Link>
          <HStack gap="3">
            {authenticated && authenticatedCta ? (
              <BrandButtonSolid asChild size="sm">
                <Link
                  href={authenticatedCta.href}
                  {...ctaLinkProps(authenticatedCta.external)}
                >
                  {authenticatedCta.label}
                </Link>
              </BrandButtonSolid>
            ) : (
              <>
                {secondaryCta ? (
                  <BrandButtonOutline asChild size="sm">
                    <Link
                      href={secondaryCta.href}
                      data-theme="button"
                      {...ctaLinkProps(secondaryCta.external)}
                    >
                      {secondaryCta.label}
                    </Link>
                  </BrandButtonOutline>
                ) : null}
                {primaryCta ? (
                  <BrandButtonSolid asChild size="sm">
                    <Link
                      href={primaryCta.href}
                      {...ctaLinkProps(primaryCta.external)}
                    >
                      {primaryCta.label}
                    </Link>
                  </BrandButtonSolid>
                ) : null}
              </>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
