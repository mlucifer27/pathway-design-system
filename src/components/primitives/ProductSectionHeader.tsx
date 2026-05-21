import { Flex, Heading, type HeadingProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type ProductSectionHeaderProps = HeadingProps & {
  title: string;
  /** Section heading level — h2 for page sections, h3 for nested blocks. */
  level?: "h2" | "h3";
  /** Optional trailing control (link, button, count). */
  action?: ReactNode;
};

const LEVEL_STYLES: Record<"h2" | "h3", HeadingProps> = {
  h2: { fontSize: "lg", fontWeight: "black", mb: "3" },
  h3: { fontSize: "lg", fontWeight: "900", mb: "3" },
};

/**
 * Product dashboard section title — navy/fg typography, not marketing `SectionHeader`.
 */
export function ProductSectionHeader({
  title,
  level = "h2",
  action,
  color = "fg.DEFAULT",
  ...props
}: ProductSectionHeaderProps) {
  const levelStyles = LEVEL_STYLES[level];

  if (action !== undefined && action !== null) {
    return (
      <Flex justify="space-between" align="center" gap="3" mb={levelStyles.mb}>
        <Heading as={level} color={color} fontSize={levelStyles.fontSize} fontWeight={levelStyles.fontWeight} {...props}>
          {title}
        </Heading>
        {action}
      </Flex>
    );
  }

  return (
    <Heading
      as={level}
      color={color}
      fontSize={levelStyles.fontSize}
      fontWeight={levelStyles.fontWeight}
      mb={levelStyles.mb}
      {...props}
    >
      {title}
    </Heading>
  );
}
