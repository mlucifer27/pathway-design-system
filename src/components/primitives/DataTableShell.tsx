import { Box, Table, type BoxProps, type TableRootProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type DataTableShellProps = BoxProps & {
  children: ReactNode;
  /** Filters, search, or actions rendered above the scroll container. */
  toolbar?: ReactNode;
  tableProps?: TableRootProps;
};

/**
 * Scrollable glass-backed data table — coach roster, admin lists, etc.
 */
export function DataTableShell({
  children,
  toolbar,
  tableProps,
  ...props
}: DataTableShellProps) {
  return (
    <Box {...props}>
      {toolbar}
      <Box overflowX="auto">
        <Table.Root
          size="sm"
          variant="outline"
          rounded="2xl"
          overflow="hidden"
          {...tableProps}
        >
          {children}
        </Table.Root>
      </Box>
    </Box>
  );
}
