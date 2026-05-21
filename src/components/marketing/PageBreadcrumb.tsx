import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
};

/** Netfusion BreadCrumb */
export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <Box mb="6" px="4" pt="4">
      <Flex as="nav" aria-label="Breadcrumb" gap="2" fontSize="sm" color="fg.muted" wrap="wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Flex key={item.label + String(index)} align="center" gap="2">
              {index > 0 ? <Text aria-hidden>/</Text> : null}
              {item.href && !isLast ? (
                <Link href={item.href}>
                  <Text _hover={{ color: "brand.fg" }}>{item.label}</Text>
                </Link>
              ) : (
                <Text color={isLast ? "fg.DEFAULT" : undefined} fontWeight={isLast ? "semibold" : undefined}>
                  {item.label}
                </Text>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
