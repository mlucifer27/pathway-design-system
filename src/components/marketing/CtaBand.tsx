import { Box, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { MarketingSection } from "./MarketingSection";

export type CtaBandProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  footer?: ReactNode;
};

/** Netfusion `.subscribe-area` — glass card on `#060606`, `flipInX`-style reveal. */
export function CtaBand({ title, description, actions, footer }: CtaBandProps) {
  return (
    <MarketingSection animate={false}>
      <Box
        className="glass-panel animate-fade-up"
        rounded="panel"
        py={{ base: "12", md: "16" }}
        px={{ base: "6", md: "10" }}
        textAlign="center"
        style={{ animationDelay: "100ms" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "32px", md: "38px", lg: "sectionTitle" }}
          lineHeight={{ base: "42px", md: "48px", lg: "55.65px" }}
          letterSpacing={{ base: "-0.04em", lg: "-1.59px" }}
          fontWeight="700"
          color="fg.heading"
          mb="4"
        >
          {title}
        </Heading>
        {description ? (
          <Text color="fg.DEFAULT" fontSize="md" lineHeight="24px" mb="8" maxW="2xl" mx="auto">
            {description}
          </Text>
        ) : null}
        {actions}
        {footer ? <Box mt="6">{footer}</Box> : null}
      </Box>
    </MarketingSection>
  );
}
