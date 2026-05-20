import { Box, Image, Text, type BoxProps } from "@chakra-ui/react";

export type UserAvatarProps = {
  displayName: string;
  imageUrl?: string | null;
  size?: "sm" | "md";
} & Omit<BoxProps, "children">;

const SIZE_MAP = {
  sm: { box: "8", fontSize: "xs" },
  md: { box: "10", fontSize: "sm" },
} as const;

function initialsFromName(displayName: string): string {
  const parts = displayName
    .split(" ")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => part[0] ?? "");

  return parts.join("").slice(0, 2).toUpperCase();
}

/** Avatar image with navy initials fallback — dashboard headers, menus, lists. */
export function UserAvatar({
  displayName,
  imageUrl,
  size = "sm",
  ...boxProps
}: UserAvatarProps) {
  const { box, fontSize } = SIZE_MAP[size];
  const initials = initialsFromName(displayName) || "?";

  if (imageUrl) {
    return (
      <Box
        rounded="full"
        overflow="hidden"
        w={box}
        h={box}
        borderWidth="1px"
        borderColor="border.strong"
        flexShrink={0}
        {...boxProps}
      >
        <Image
          src={imageUrl}
          alt={`${displayName} avatar`}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={box}
      h={box}
      rounded="full"
      bg="primary.solid"
      borderWidth="1px"
      borderColor="border.strong"
      flexShrink={0}
      {...boxProps}
    >
      <Text color="primary.contrast" fontWeight="900" fontSize={fontSize}>
        {initials}
      </Text>
    </Box>
  );
}
