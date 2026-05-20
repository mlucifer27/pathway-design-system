import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { marketingSectionPy } from "./section-spacing";

export type CtaBandProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  footer?: ReactNode;
};

/** Netfusion NewsLetterV1 — full-width signup strip */
export function CtaBand({ title, description, actions, footer }: CtaBandProps) {
  return (
    <Box
      as="section"
      py={marketingSectionPy}
      px="4"
      bg="bg.section"
      textAlign="center"
      className="animate-fade-up"
    >
      <Container maxW="3xl">
        <Heading
          as="h3"
          className="marketing-heading"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="900"
          mb="4"
        >
          {title}
        </Heading>
        {description ? (
          <Text color="fg.muted" fontSize="lg" mb="8">
            {description}
          </Text>
        ) : null}
        {actions}
        {footer ? <Box mt="6">{footer}</Box> : null}
      </Container>
    </Box>
  );
}
