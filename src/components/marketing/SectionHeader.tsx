import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export type SectionHeaderProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

/** Netfusion `.te-section-title` */
export function SectionHeader({
  shortLabel,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <Flex
      direction={{ base: "column", lg: description ? "row" : "column" }}
      align={isCenter ? "center" : "flex-start"}
      justify="space-between"
      gap="6"
      mb="sectionTitleMb"
      textAlign={isCenter ? "center" : "left"}
      className="animate-fade-up"
    >
      <Box maxW={description ? "2xl" : "4xl"}>
        {shortLabel ? (
          <Text
            as="span"
            display="inline-block"
            fontSize="shortLabel"
            fontWeight="bold"
            color="marketing.fg"
            borderWidth="1px"
            borderColor="marketing.solid"
            px="3"
            py="1"
            rounded="sm"
            mb="4"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {shortLabel}
          </Text>
        ) : null}
        <Heading
          as="h2"
          className="marketing-heading"
          fontSize={{ base: "3xl", md: "sectionTitle" }}
          fontWeight="900"
          lineHeight="1.15"
          letterSpacing="-0.04em"
        >
          {title}
        </Heading>
      </Box>
      {description ? (
        <Text
          color="fg.muted"
          fontSize="lg"
          maxW="md"
          lineHeight="relaxed"
          alignSelf={isCenter ? "center" : "flex-end"}
        >
          {description}
        </Text>
      ) : null}
    </Flex>
  );
}
