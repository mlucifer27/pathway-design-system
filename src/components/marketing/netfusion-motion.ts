/** Netfusion WOW defaults: 1500ms duration, 100ms base delay, 200ms stagger. */
export const NETFUSION_MOTION_DURATION_MS = 1500;
export const NETFUSION_MOTION_BASE_DELAY_MS = 100;
export const NETFUSION_MOTION_STAGGER_MS = 200;

export function netfusionMotionDelay(index: number, stepMs = NETFUSION_MOTION_STAGGER_MS): string {
  return `${NETFUSION_MOTION_BASE_DELAY_MS + index * stepMs}ms`;
}
