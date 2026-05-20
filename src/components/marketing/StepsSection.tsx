import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { SectionHeader } from "./SectionHeader";
import { marketingSectionPy } from "./section-spacing";

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

/** Netfusion ProcessV1 / ProcessV2 */
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
    <Box as="section" py={marketingSectionPy} px="4" bg="bg.section">
      <Box maxW="6xl" mx="auto">
        <SectionHeader shortLabel={shortLabel} title={title} description={description} />
        <Grid templateColumns={templateColumns} gap="8">
          {steps.map((item) => (
            <Box key={String(item.step) + item.title} className="glass-panel" p="6" rounded="card">
              <Flex
                align="center"
                justify="center"
                boxSize="12"
                rounded="full"
                borderWidth="1px"
                borderColor="marketing.solid"
                color="marketing.fg"
                fontWeight="900"
                fontSize="lg"
                mb="4"
              >
                {item.step}
              </Flex>
              <Heading as="h4" fontSize="lg" fontWeight="900" mb="2" className="marketing-heading">
                {item.title}
              </Heading>
              <Text color="fg.muted" fontSize="sm" lineHeight="relaxed">
                {item.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
