import Link from "next/link";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type PublicSiteFooterProps = {
  brandTitle: string;
  brandDescription: string;
  links: FooterLink[];
  copyright: string;
  aside?: ReactNode;
};

/** Netfusion FooterV1 spacing */
export function PublicSiteFooter({
  brandTitle,
  brandDescription,
  links,
  copyright,
  aside,
}: PublicSiteFooterProps) {
  return (
    <Box
      as="footer"
      bg="bg.glass"
      backdropFilter="blur(6.5px)"
      borderTopWidth="1px"
      borderColor="border.DEFAULT"
      py="10"
      px="4"
      position="relative"
      zIndex={1}
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap="6"
          mb="8"
        >
          <Box>
            <Text fontWeight="700" color="fg.heading" fontSize="xl">
              {brandTitle}
            </Text>
            <Text fontSize="sm" mt="1" color="fg.muted">
              {brandDescription}
            </Text>
          </Box>
          <Flex wrap="wrap" gap="6" fontSize="sm" justify="center" color="fg.muted">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            ))}
          </Flex>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap="3"
          fontSize="xs"
          borderTopWidth="1px"
          borderColor="border.subtle"
          pt="6"
          color="fg.subtle"
        >
          <Text>{copyright}</Text>
          {aside}
        </Stack>
      </Container>
    </Box>
  );
}
