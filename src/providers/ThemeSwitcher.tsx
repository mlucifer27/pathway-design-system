"use client";

import { Box, Icon, IconButton, Menu, Portal } from "@chakra-ui/react";
import { LuCheck, LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./color-mode";

const OPTIONS = [
  { value: "dark", label: "Dark", icon: LuMoon },
  { value: "light", label: "Light", icon: LuSun },
] as const;

/** Fixed bottom-right theme menu — Dark (default) / Light. */
export function PathwayThemeSwitcher() {
  const { theme, setTheme } = useColorMode();
  const activeOption =
    OPTIONS.find((option) => option.value === theme) ?? OPTIONS[0];

  return (
    <Box position="fixed" bottom="4" right="4" zIndex="60">
      <Menu.Root positioning={{ placement: "top-end" }}>
        <Menu.Trigger asChild>
          <IconButton
            aria-label="Theme"
            size="sm"
            variant="outline"
            rounded="full"
            bg="bg.elevated"
            borderColor="border.emphasized"
            color="fg"
            boxShadow="md"
            _hover={{ bg: "bg.glassHover", borderColor: "border.strong" }}
          >
            <Icon as={activeOption.icon} boxSize="4" color="fg" aria-hidden />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW="10rem" py="1">
              {OPTIONS.map((option) => {
                const active = theme === option.value;
                return (
                  <Menu.Item
                    key={option.value}
                    value={option.value}
                    onClick={() => setTheme(option.value)}
                    cursor="pointer"
                    px="4"
                    py="2.5"
                    color="fg.DEFAULT"
                    _hover={{ bg: "bg.glassHover" }}
                  >
                    <Icon as={option.icon} boxSize="4" mr="2" aria-hidden />
                    {option.label}
                    {active ? (
                      <Icon as={LuCheck} boxSize="4" ml="auto" aria-hidden />
                    ) : null}
                  </Menu.Item>
                );
              })}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
}
