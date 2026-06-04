"use client";

import { Box } from "@chakra-ui/react";
import { NETFUSION_REFERENCE } from "../../tokens/netfusion-reference";

const RING_SIZES_PX = [320, 480, 640, 800] as const;
const MAX_RINGS = RING_SIZES_PX.length;

/** Arena Light — intentional rings + dot grid (replaces accidental washed circles). */
export function MarketingLightAtmosphere() {
  return (
    <Box position="absolute" inset="0" pointerEvents="none" aria-hidden="true">
      <Box
        position="absolute"
        inset="0"
        opacity={0.45}
        backgroundImage="radial-gradient(rgba(15, 23, 42, 0.07) 1px, transparent 1px)"
        backgroundSize="28px 28px"
      />
      <Box
        position="absolute"
        top="18%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
        maxW="1200px"
        h="900px"
      >
        {RING_SIZES_PX.map((sizePx, index) => {
          if (index >= MAX_RINGS) {
            return null;
          }
          return (
            <Box
              key={sizePx}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={`${sizePx}px`}
              h={`${sizePx}px`}
              maxW="95vw"
              borderWidth="1px"
              borderStyle="solid"
              borderColor={NETFUSION_REFERENCE.lightRingStroke}
              borderRadius="full"
              opacity={1 - index * 0.18}
            />
          );
        })}
      </Box>
    </Box>
  );
}
