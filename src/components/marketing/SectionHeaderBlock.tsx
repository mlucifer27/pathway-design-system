import { Box } from "@chakra-ui/react";
import { SectionHeader, type SectionHeaderProps } from "./SectionHeader";

export type SectionHeaderBlockProps = SectionHeaderProps;

/** Centered section title row — keeps short labels shrink-wrapped under animation wrappers. */
export function SectionHeaderBlock(props: SectionHeaderBlockProps) {
  const isCenter = (props.align ?? "center") === "center";

  return (
    <Box
      className="animate-slide-in-down"
      mb="sectionTitleMb"
      display="flex"
      flexDirection="column"
      alignItems={isCenter ? "center" : "flex-start"}
      w="full"
    >
      <SectionHeader {...props} />
    </Box>
  );
}
