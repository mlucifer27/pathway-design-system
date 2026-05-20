import { Container, type ContainerProps } from "@chakra-ui/react";
import {
  DASHBOARD_CONTAINER_MAX_W,
  DASHBOARD_CONTAINER_PB,
  DASHBOARD_CONTAINER_PX,
} from "../../foundations/layout";

export type DashboardPageContainerProps = ContainerProps;

/** Standard authenticated page shell (`maxW="2xl"`, bottom nav clearance). */
export function DashboardPageContainer({
  maxW = DASHBOARD_CONTAINER_MAX_W,
  px = DASHBOARD_CONTAINER_PX,
  pb = DASHBOARD_CONTAINER_PB,
  w = "full",
  ...props
}: DashboardPageContainerProps) {
  return <Container maxW={maxW} px={px} pb={pb} w={w} {...props} />;
}
