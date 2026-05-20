import { Button, type ButtonProps } from "@chakra-ui/react";
import { NETFUSION_REFERENCE } from "../../tokens/netfusion-reference";

const brandTransition = `all ${NETFUSION_REFERENCE.transitionDefault}`;

/** Netfusion `.blue-btn` — brand green CTA (public pages and branded product moments). */
export function BrandButtonSolid(props: ButtonProps) {
  return (
    <Button
      bg="brand.solid"
      color="brand.contrast"
      rounded="control"
      fontWeight="bold"
      transition={brandTransition}
      _hover={{ bg: "brand.hover" }}
      {...props}
    />
  );
}

/** Netfusion `.te-theme-btn` — outline brand CTA. */
export function BrandButtonOutline(props: ButtonProps) {
  return (
    <Button
      color="brand.fg"
      borderWidth="1px"
      borderColor="brand.solid"
      bg="transparent"
      rounded="sm"
      fontWeight="bold"
      transition={brandTransition}
      _hover={{
        bg: "brand.solid",
        color: "brand.contrast",
        borderColor: "brand.solid",
      }}
      {...props}
    />
  );
}
