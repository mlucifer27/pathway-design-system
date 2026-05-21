import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MarketingShortLabel } from "./MarketingShortLabel";

export type SectionHeaderProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

const sectionTitleStyles = {
  fontSize: { base: "32px", md: "38px", lg: "sectionTitle" },
  lineHeight: { base: "42px", md: "48px", lg: "55.65px" },
  letterSpacing: { base: "-0.04em", lg: "-1.59px" },
} as const;

/** Netfusion `.te-section-title` */
export function SectionHeader({
  shortLabel,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  const titleBlock = (
    <Box
      display="flex"
      flexDirection="column"
      gap="4"
      w={isCenter ? "full" : undefined}
      alignItems={isCenter ? "center" : "flex-start"}
      textAlign={isCenter ? "center" : "left"}
    >
      {shortLabel ? <MarketingShortLabel>{shortLabel}</MarketingShortLabel> : null}
      <Heading as="h2" color="fg.heading" mb="0" {...sectionTitleStyles}>
        {title}
      </Heading>
    </Box>
  );

  if (isCenter) {
    return (
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        gap="6"
        w="full"
        maxW="4xl"
        mx="auto"
      >
        {titleBlock}
        {description ? (
          <Text color="fg.DEFAULT" fontSize="md" maxW="md" lineHeight="24px">
            {description}
          </Text>
        ) : null}
      </Flex>
    );
  }

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      align={{ base: "stretch", lg: "flex-end" }}
      gap="6"
    >
      <Box flex="1" maxW={{ lg: "50%" }}>
        {titleBlock}
      </Box>
      {description ? (
        <Text
          color="fg.DEFAULT"
          fontSize="md"
          lineHeight="24px"
          maxW={{ lg: "50%" }}
          alignSelf={{ lg: "flex-end" }}
        >
          {description}
        </Text>
      ) : null}
    </Flex>
  );
}
