import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type MarketingInfoPanelProps = {
  title: string;
  children: ReactNode;
};

export function MarketingInfoPanel({ title, children }: MarketingInfoPanelProps) {
  return (
    <Box className="glass-panel" rounded="panel" mt="10" p="5">
      <Heading as="h3" fontWeight="700" color="fg.heading" mb="2" fontSize="md">
        {title}
      </Heading>
      {children}
    </Box>
  );
}
