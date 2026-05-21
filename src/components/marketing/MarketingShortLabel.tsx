import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type MarketingShortLabelProps = {
  children: ReactNode;
};

/** Netfusion `.short-title-wrapper` + `.short-title` — shrink-wrap, centered label text. */
export function MarketingShortLabel({ children }: MarketingShortLabelProps) {
  return (
    <Box
      lineHeight="initial"
      w="fit-content"
      maxW="100%"
      flexShrink={0}
      alignSelf="center"
    >
      <Box
        as="span"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        w="fit-content"
        flexShrink={0}
        fontSize="shortLabel"
        fontWeight="700"
        lineHeight="13.2px"
        letterSpacing="-0.12px"
        color="brand.fg"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="brand.solid"
        borderRadius="5px"
        px="10px"
        py="5px"
      >
        {children}
      </Box>
    </Box>
  );
}
