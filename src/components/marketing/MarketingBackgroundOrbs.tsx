"use client";

import { Box } from "@chakra-ui/react";
import { NETFUSION_REFERENCE } from "../../tokens/netfusion-reference";
import { MarketingLightAtmosphere } from "./MarketingLightAtmosphere";

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
  const centerOpacity = isLight ? NETFUSION_REFERENCE.orbOpacityLightCenter : 0;

  return (
    <Box
      position={variant === "auth" ? "absolute" : "fixed"}
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={0}
      aria-hidden="true"
    >
      {isLight ? <MarketingLightAtmosphere /> : null}
      {isLight ? (
        <Box
          className="blur-shape"
          position="absolute"
          top="8%"
          left="50%"
          transform="translate(-50%, 0)"
          w="720px"
          h="420px"
          maxW="100vw"
          bg="brand.400"
          opacity={centerOpacity}
          filter={`blur(${ORB_BLUR_PX})`}
          borderRadius="full"
        />
      ) : null}
      {isLight ? (
        <Box
          className="blur-shape"
          position="absolute"
          top="0"
          right="0"
          w="360px"
          h="360px"
          bg={NETFUSION_REFERENCE.pageBgAccent}
          opacity={0.06}
          filter="blur(120px)"
          borderRadius="full"
        />
      ) : null}
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
        bg={isLight ? "brand.400" : "brand.500"}
        opacity={secondaryOpacity}
        filter="blur(200px)"
        borderRadius="full"
      />
    </Box>
  );
}
