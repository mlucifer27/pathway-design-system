import { Box, ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import { createPathwaySystem } from "../src/theme/create-pathway-system";

const system = createPathwaySystem();

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#060606" },
        { name: "light", value: "#F7FBFE" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={system}>
        <Box bg="bg.canvas" color="fg.DEFAULT" minH="100vh" p="8">
          <Story />
        </Box>
      </ChakraProvider>
    ),
  ],
};

export default preview;
