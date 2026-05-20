import { createSystem, defaultConfig } from "@chakra-ui/react";
import { pathwayThemeConfig } from "./pathway-theme-config";

export const createPathwaySystem = () =>
  createSystem(defaultConfig, pathwayThemeConfig);
