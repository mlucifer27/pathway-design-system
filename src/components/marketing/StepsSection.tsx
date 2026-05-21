import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { netfusionMotionDelay } from "./netfusion-motion";
import { MarketingSection } from "./MarketingSection";
import { SectionHeaderBlock } from "./SectionHeaderBlock";

export type ProcessStep = {
  step: number | string;
  title: string;
  description: string;
};

export type StepsSectionProps = {
  shortLabel?: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
  columns?: { base?: number; md?: number };
};

/** Netfusion `.process-step-area` cards */
export function StepsSection({
  shortLabel,
  title,
  description,
  steps,
  columns = { base: 1, md: 3 },
}: StepsSectionProps) {
  const templateColumns = {
    base: `repeat(${columns.base ?? 1}, 1fr)`,
    md: columns.md ? `repeat(${columns.md}, 1fr)` : undefined,
  };

  return (
    <MarketingSection animate={false}>
      <SectionHeaderBlock
        shortLabel={shortLabel}
        title={title}
        description={description}
        align="center"
      />
      <Grid templateColumns={templateColumns} gap="8">
        {steps.map((item, index) => (
          <Box
            key={String(item.step) + item.title}
            className="glass-panel animate-fade-up"
            rounded="panel"
            p="6"
            h="full"
            style={{ animationDelay: netfusionMotionDelay(index) }}
          >
            <Flex
              align="center"
              justify="center"
              boxSize="12"
              rounded="full"
              borderWidth="1px"
              borderColor="brand.solid"
              color="brand.fg"
              fontWeight="700"
              fontSize="lg"
              mb="4"
            >
              {item.step}
            </Flex>
            <Heading as="h4" fontSize="24px" fontWeight="500" lineHeight="31px" color="fg.DEFAULT" mb="2">
              {item.title}
            </Heading>
            <Text color="fg.DEFAULT" fontSize="md" lineHeight="24px">
              {item.description}
            </Text>
          </Box>
        ))}
      </Grid>
    </MarketingSection>
  );
}
