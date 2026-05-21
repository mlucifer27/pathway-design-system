import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { MarketingShortLabel } from "./MarketingShortLabel";
import { marketingHeroPb, marketingHeroPt } from "./section-spacing";

export type MarketingHeroProps = {
  badge?: string;
  title: ReactNode;
  subtitle: string;
  actions?: ReactNode;
  align?: "center" | "left";
};

/** Netfusion `.banner-area.style-1` + centered `.te-section-title` */
export function MarketingHero({
  badge,
  title,
  subtitle,
  actions,
  align = "center",
}: MarketingHeroProps) {
  const isCenter = align === "center";

  return (
    <Box as="section" position="relative" pt={marketingHeroPt} pb={marketingHeroPb} px="4">
      <Container maxW="6xl" textAlign={isCenter ? "center" : "left"}>
        <Box
          className="animate-slide-in-down"
          display="flex"
          flexDirection="column"
          alignItems={isCenter ? "center" : "flex-start"}
        >
          {badge ? <MarketingShortLabel>{badge}</MarketingShortLabel> : null}
          <Heading
            as="h1"
            color="fg.heading"
            mb="6"
            fontSize={{ base: "40px", md: "52px", lg: "hero" }}
            lineHeight={{ base: "1.15", lg: "1.09" }}
            letterSpacing={{ base: "-0.04em", lg: "-1.59px" }}
          >
            {title}
          </Heading>
          <Text
            fontSize="md"
            color="fg.DEFAULT"
            mb="10"
            maxW="2xl"
            mx={isCenter ? "auto" : undefined}
            lineHeight="24px"
          >
            {subtitle}
          </Text>
          {actions ? (
            <Flex justify={isCenter ? "center" : "flex-start"} gap="4" wrap="wrap">
              {actions}
            </Flex>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}
