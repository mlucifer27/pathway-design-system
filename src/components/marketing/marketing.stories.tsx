import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { FiActivity, FiTarget } from "react-icons/fi";
import { BrandButtonOutline, BrandButtonSolid } from "../primitives/BrandButton";
import { AuthFormShell } from "./AuthFormShell";
import { CtaBand } from "./CtaBand";
import { FeatureCardGrid } from "./FeatureCard";
import { MarketingHero } from "./MarketingHero";
import { MarketingInfoPanel } from "./MarketingInfoPanel";
import { PageBreadcrumb } from "./PageBreadcrumb";
import { SectionHeader } from "./SectionHeader";
import { authInputProps, authSubmitButtonProps } from "./auth-form-styles";

const meta: Meta = {
  title: "Marketing",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const Hero: Story = {
  render: () => (
    <MarketingHero
      badge="AthleteIQ"
      title="Train smarter. Recruit faster."
      subtitle="Daily check-ins, pillar scores, and coach feedback in one place."
      actions={
        <Stack direction={{ base: "column", sm: "row" }} gap="3" justify="center">
          <BrandButtonSolid>Get started</BrandButtonSolid>
          <BrandButtonOutline>See pricing</BrandButtonOutline>
        </Stack>
      }
    />
  ),
};

export const SectionHeaderStory: Story = {
  name: "SectionHeader",
  render: () => (
    <SectionHeader
      shortLabel="Features"
      title="Everything your program needs"
      description="Built for coaches, athletes, and families at every age tier."
      align="center"
    />
  ),
};

export const PageBreadcrumbStory: Story = {
  name: "PageBreadcrumb",
  render: () => (
    <PageBreadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Lessons", href: "/lessons" },
        { label: "Resilience" },
      ]}
    />
  ),
};

export const FeatureCards: Story = {
  render: () => (
    <FeatureCardGrid
      shortLabel="Products"
      title="Two apps, one platform"
      description="Public marketing surfaces and authenticated dashboards share the same tokens."
      items={[
        {
          id: "athleteiq",
          title: "AthleteIQ",
          description: "Check-ins, goals, and recruiting visibility for athletes and coaches.",
          icon: FiActivity,
          href: "/athleteiq",
          ctaLabel: "Explore",
        },
        {
          id: "platform",
          title: "Pathway Platform",
          description: "Org-wide admin, billing, and college coach portals.",
          icon: FiTarget,
          badge: "Live",
          badgeVariant: "live",
          ctaLabel: "Coming soon",
          disabled: true,
        },
      ]}
    />
  ),
};

export const CtaBandStory: Story = {
  name: "CtaBand",
  render: () => (
    <CtaBand
      title="Ready to bring structure to your season?"
      description="Start with a pilot team and expand when your coaches are comfortable."
      actions={<BrandButtonSolid>Book a demo</BrandButtonSolid>}
    />
  ),
};

export const InfoPanel: Story = {
  render: () => (
    <MarketingInfoPanel title="Netfusion-aligned glass panels">
      <Text color="fg.muted" fontSize="sm" mt="2">
        Tokens and motion live in the design system — apps should not fork CSS per page.
      </Text>
    </MarketingInfoPanel>
  ),
};

export const AuthFormShellStory: Story = {
  name: "AuthFormShell",
  render: () => (
    <Box minH="420px" position="relative">
      <AuthFormShell>
        <Text fontWeight="900" fontSize="xl" color="fg.DEFAULT" mb="6" textAlign="center">
          Sign in
        </Text>
        <Stack gap="4">
          <Input {...authInputProps} placeholder="Email" type="email" />
          <Input {...authInputProps} placeholder="Password" type="password" />
          <Button {...authSubmitButtonProps}>Continue</Button>
        </Stack>
      </AuthFormShell>
    </Box>
  ),
};
