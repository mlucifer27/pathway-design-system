import Link from "next/link";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export type AuthSiteHeaderProps = {
  brandTitle: string;
  homeHref?: string;
  brandTagline?: string;
};

/** Auth chrome matches `PublicSiteHeader` — glass sticky bar, logo only. */
export function AuthSiteHeader({
  brandTitle,
  homeHref = "/",
  brandTagline = "Back to home",
}: AuthSiteHeaderProps) {
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
        <Link href={homeHref}>
          <Heading
            as="p"
            fontSize="2xl"
            fontWeight="700"
            color="fg.heading"
            letterSpacing="tight"
            _hover={{ color: "brand.fg" }}
            transition="color 0.5s ease-out"
          >
            {brandTitle}
          </Heading>
          <Text fontSize="xs" color="fg.muted" mt="-1">
            {brandTagline}
          </Text>
        </Link>
      </Container>
    </Box>
  );
}
