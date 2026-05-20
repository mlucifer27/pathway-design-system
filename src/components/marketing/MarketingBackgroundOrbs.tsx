"use client";

import { Box } from "@chakra-ui/react";

export type MarketingBackgroundOrbsProps = {
  variant?: "global" | "auth";
  resolvedTheme: "light" | "dark";
};

/** Netfusion `.circle-drop-shadow` — brand green blobs, 244px blur */
export function MarketingBackgroundOrbs({
  variant = "global",
  resolvedTheme,
}: MarketingBackgroundOrbsProps) {
  const isLight = resolvedTheme === "light";
  const opacityScale = isLight ? 0.35 : 1;
  const brandGlow = "brand.500";

  if (variant === "auth") {
    return (
      <>
        <Box
          position="absolute"
          top="-10%"
          left="-10%"
          w="40%"
          h="40%"
          bg={brandGlow}
          filter="blur(244px)"
          opacity={0.2 * opacityScale}
          borderRadius="full"
          zIndex={0}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="-10%"
          right="-10%"
          w="50%"
          h="50%"
          bg={brandGlow}
          filter="blur(244px)"
          opacity={0.15 * opacityScale}
          borderRadius="full"
          zIndex={0}
          pointerEvents="none"
        />
      </>
    );
  }

  return (
    <Box
      position="fixed"
      inset="0"
      overflow="hidden"
      pointerEvents="none"
      zIndex={0}
      aria-hidden="true"
    >
      <Box
        position="absolute"
        top="-5%"
        left="-5%"
        w="30%"
        h="30%"
        bg={brandGlow}
        filter="blur(244px)"
        opacity={0.2 * opacityScale}
        borderRadius="full"
      />
      <Box
        position="absolute"
        top="10%"
        right="-5%"
        w="25%"
        h="25%"
        bg={brandGlow}
        filter="blur(244px)"
        opacity={0.12 * opacityScale}
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="-10%"
        right="10%"
        w="40%"
        h="40%"
        bg={brandGlow}
        filter="blur(244px)"
        opacity={0.18 * opacityScale}
        borderRadius="full"
      />
    </Box>
  );
}
