import { Button, type ButtonProps } from "@chakra-ui/react";
import { NETFUSION_REFERENCE } from "../../tokens/netfusion-reference";

const transition = NETFUSION_REFERENCE.transitionDefault;

/** Netfusion `.te-theme-btn.blue-btn` */
export function BrandButtonSolid(props: ButtonProps) {
  return (
    <Button
      bg="brand.solid"
      color="brand.contrast"
      rounded="control"
      fontWeight="600"
      fontSize="sm"
      px="10"
      py="4"
      h="auto"
      transition={`all ${transition}`}
      _hover={{ bg: "brand.solid", color: "brand.contrast" }}
      {...props}
    />
  );
}

/** Netfusion `.te-theme-btn` outline */
export function BrandButtonOutline(props: ButtonProps) {
  return (
    <Button
      color="brand.fg"
      borderWidth="1px"
      borderColor="brand.solid"
      bg="transparent"
      rounded="md"
      fontWeight="600"
      fontSize="sm"
      px="8"
      py="4"
      h="auto"
      transition={`all ${transition}`}
      _hover={{
        bg: "brand.solid",
        color: "#ffffff",
        borderColor: "brand.solid",
      }}
      {...props}
    />
  );
}
