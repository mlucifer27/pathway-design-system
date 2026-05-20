import { defineConfig } from "@chakra-ui/react";
import {
  pathwayColorTokens,
  pathwayTypographyTokens,
  pathwaySpacingTokens,
  pathwayRadiiTokens,
  pathwayShadowTokens,
  pathwaySemanticColorTokens,
  pathwayRecipes,
} from "../tokens";
import { pathwayGlobalCss } from "./global-styles";

/**
 * Pathway platform Chakra theme — Netfusion-aligned brand layer + navy `primary` for product UI.
 * Tokens live under `src/tokens/`; add product primitives under `src/components/` over time.
 */
export const pathwayThemeConfig = defineConfig({
  theme: {
    tokens: {
      colors: pathwayColorTokens,
      fonts: pathwayTypographyTokens.fonts,
      fontSizes: pathwayTypographyTokens.fontSizes,
      spacing: pathwaySpacingTokens,
      radii: pathwayRadiiTokens,
      shadows: pathwayShadowTokens,
    },
    semanticTokens: {
      colors: pathwaySemanticColorTokens,
    },
    recipes: pathwayRecipes,
  },
  globalCss: pathwayGlobalCss,
});
