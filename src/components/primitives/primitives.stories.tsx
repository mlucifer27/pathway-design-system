import { Badge, Button, Flex, Input, Stack, Table, Text, Textarea } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { FiUser } from "react-icons/fi";
import {
  BrandButtonOutline,
  BrandButtonSolid,
  DataTableShell,
  EmptyStatePanel,
  GlassPanel,
  ProductButtonOutline,
  ProductButtonSolid,
  ProductSectionHeader,
  StatCard,
  UserAvatar,
  glassPanelBadgeProps,
  glassPanelButtonProps,
  glassPanelFieldProps,
  glassPanelTableHeaderProps,
} from "./index";

const meta: Meta = {
  title: "Primitives",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const GlassSurfaces: Story = {
  render: () => (
    <Stack gap="6" maxW="md">
      <GlassPanel p="6">
        <Text fontWeight="bold">GlassPanel</Text>
        <Text color="fg.muted" fontSize="sm">
          Default card surface on bg.glass.
        </Text>
      </GlassPanel>
      <Flex gap="3" wrap="wrap">
        <Button {...glassPanelButtonProps}>Glass button</Button>
        <Badge {...glassPanelBadgeProps} rounded="full">
          Badge
        </Badge>
      </Flex>
      <Input {...glassPanelFieldProps} placeholder="glassPanelFieldProps" rounded="xl" />
      <Textarea {...glassPanelFieldProps} placeholder="Textarea" rows={2} rounded="xl" />
    </Stack>
  ),
};

export const Buttons: Story = {
  render: () => (
    <Flex gap="4" wrap="wrap">
      <BrandButtonSolid>Brand solid</BrandButtonSolid>
      <BrandButtonOutline>Brand outline</BrandButtonOutline>
      <ProductButtonSolid>Product solid</ProductButtonSolid>
      <ProductButtonOutline>Product outline</ProductButtonOutline>
    </Flex>
  ),
};

export const StatCardStory: Story = {
  name: "StatCard",
  render: () => (
    <Flex gap="4" maxW="lg" wrap="wrap">
      <StatCard label="Day streak" value={12} icon={<FiUser size={22} />} flex="1" minW="120px" />
      <StatCard label="Check-ins" value="48" flex="1" minW="120px" />
    </Flex>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <EmptyStatePanel
      maxW="md"
      icon={<FiUser size={40} />}
      title="No players on this roster yet"
      description="Share your team code or send an invite."
    />
  ),
};

export const SectionHeader: Story = {
  render: () => (
    <Stack gap="6" maxW="lg">
      <ProductSectionHeader title="Players (12)" />
      <ProductSectionHeader
        title="Recent check-ins"
        level="h3"
        action={
          <Button size="sm" variant="ghost">
            View all
          </Button>
        }
      />
    </Stack>
  ),
};

export const DataTable: Story = {
  render: () => (
    <DataTableShell
      maxW="2xl"
      toolbar={
        <Input placeholder="Search…" rounded="xl" mb="4" maxW="xs" />
      }
    >
      <Table.Header>
        <Table.Row {...glassPanelTableHeaderProps}>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Streak</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alex Rivera</Table.Cell>
          <Table.Cell>5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jordan Lee</Table.Cell>
          <Table.Cell>12</Table.Cell>
        </Table.Row>
      </Table.Body>
    </DataTableShell>
  ),
};

export const UserAvatarStory: Story = {
  name: "UserAvatar",
  render: () => (
    <Flex gap="4" align="center">
      <UserAvatar displayName="Sam Coach" size="md" />
      <UserAvatar displayName="Avery Athlete" size="md" imageUrl="https://i.pravatar.cc/80" />
    </Flex>
  ),
};
