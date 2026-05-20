import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { marketingHeroPt } from "./section-spacing";

export type MarketingHeroProps = {
  badge?: string;
  title: ReactNode;
  subtitle: string;
  actions?: ReactNode;
  align?: "center" | "left";
};

/** Netfusion banner / SliderV1 headline block */
export function MarketingHero({
  badge,
  title,
  subtitle,
  actions,
  align = "center",
}: MarketingHeroProps) {
  const isCenter = align === "center";

  return (
    <Box
      as="section"
      pt={marketingHeroPt}
      pb={{ base: "16", md: "20" }}
      px="4"
      className="animate-fade-up"
    >
      <Container maxW="4xl" textAlign={isCenter ? "center" : "left"}>
        {badge ? (
          <Text
            as="span"
            display="inline-block"
            fontSize="shortLabel"
            fontWeight="bold"
            color="marketing.fg"
            borderWidth="1px"
            borderColor="marketing.solid"
            px="4"
            py="2"
            rounded="sm"
            mb="6"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {badge}
          </Text>
        ) : null}
        <Heading
          as="h1"
          className="marketing-heading"
          fontSize={{ base: "4xl", md: "6xl", lg: "hero" }}
          fontWeight="900"
          lineHeight="1.1"
          letterSpacing="-0.04em"
          mb="6"
        >
          {title}
        </Heading>
        <Text fontSize="xl" color="fg.muted" mb="10" maxW="2xl" mx={isCenter ? "auto" : undefined}>
          {subtitle}
        </Text>
        {actions ? (
          <Flex justify={isCenter ? "center" : "flex-start"} gap="4" wrap="wrap">
            {actions}
          </Flex>
        ) : null}
      </Container>
    </Box>
  );
}
