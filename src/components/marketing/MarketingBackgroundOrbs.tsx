"use client";

import { Box } from "@chakra-ui/react";
import { NETFUSION_REFERENCE } from "../../tokens/netfusion-reference";

export type MarketingBackgroundOrbsProps = {
  variant?: "global" | "auth";
  resolvedTheme: "light" | "dark";
};

const ORB_BLUR_PX = `${NETFUSION_REFERENCE.orbBlurPx}px`;

/** Netfusion `.blur-shape` / `.circle-drop-shadow` — green glow on dark and light canvases. */
export function MarketingBackgroundOrbs({
  variant = "global",
  resolvedTheme,
}: MarketingBackgroundOrbsProps) {
  const isLight = resolvedTheme === "light";
  const primaryOpacity = isLight
    ? NETFUSION_REFERENCE.orbOpacityLight
    : NETFUSION_REFERENCE.orbOpacity;
  const secondaryOpacity = isLight ? NETFUSION_REFERENCE.orbOpacityLightSecondary : 0.2;

  return (
    <Box
      position={variant === "auth" ? "absolute" : "fixed"}
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={0}
      aria-hidden="true"
    >
      <Box
        className="blur-shape"
        position="absolute"
        top={isLight ? "12%" : "20%"}
        left={isLight ? "8%" : "15%"}
        w="613px"
        h="613px"
        maxW="90vw"
        maxH="70vh"
        bg="brand.500"
        opacity={primaryOpacity}
        filter={`blur(${ORB_BLUR_PX})`}
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom={isLight ? "0" : "10%"}
        right={isLight ? "-5%" : "10%"}
        w={isLight ? "520px" : "400px"}
        h={isLight ? "520px" : "400px"}
        maxW="85vw"
        bg={isLight ? "brand.300" : "brand.500"}
        opacity={secondaryOpacity}
        filter="blur(200px)"
        borderRadius="full"
      />
    </Box>
  );
}
