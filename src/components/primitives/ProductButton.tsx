import { Button, type ButtonProps } from "@chakra-ui/react";

/** Navy primary actions for authenticated dashboards and internal tools. */
export function ProductButtonSolid(props: ButtonProps) {
  return (
    <Button
      bg="primary.solid"
      color="primary.contrast"
      fontWeight="bold"
      _hover={{ bg: "primary.hover" }}
      {...props}
    />
  );
}

export function ProductButtonOutline(props: ButtonProps) {
  return (
    <Button
      variant="outline"
      color="fg.DEFAULT"
      borderColor="primary.solid"
      bg="transparent"
      fontWeight="bold"
      _hover={{
        bg: "primary.muted",
        borderColor: "primary.emphasized",
        color: "fg.DEFAULT",
      }}
      {...props}
    />
  );
}
