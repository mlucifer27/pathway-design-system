# @pathway-sg/design-system architecture

Platform-wide design consistency for Pathway Sports Group apps (marketing sites today; dashboards and API-backed UIs next).

## Layers

| Layer | Path | Role |
|-------|------|------|
| Reference | `src/tokens/netfusion-reference.ts` | Documented Netfusion Sass values for audits |
| Tokens | `src/tokens/*` | Colors, type, spacing, radii, shadows, semantics, recipes, breakpoints |
| Foundations | `src/foundations/*` | Cross-app constants (theme storage key, layout widths, theme init script) |
| Providers | `src/providers/*` | `ColorModeProvider`, `PathwayThemeSwitcher` (optional `react-icons` peer) |
| Theme | `src/theme/*` | Chakra `defineConfig` + `createPathwaySystem()` + global CSS |
| Primitives | `src/components/primitives/*` | Product UI building blocks (glass, buttons, avatar, shells) |
| Marketing | `src/components/marketing/*` | Public-site sections (Netfusion-aligned compositions) |

## Token naming

- **`brand.*`** — Netfusion green (`#02C173`), dark canvas, glass surfaces. Use on public pages and branded moments.
- **`primary.*`** — Navy palette for authenticated dashboards and internal tools.

## Netfusion alignment

Public marketing components map to Netfusion modules (HeaderV1, SliderV1, `.te-section-title`, etc.). See `docs/netfusion-token-map.md` at repo root.

Motion (`MovefadeUp`), glass panels, and link hovers live in `src/theme/global-styles.ts` so consumers do not duplicate CSS per app.

## Primitives (product UI)

| Primitive | Use when |
|-----------|----------|
| `GlassPanel` | Card/sheet on `bg.glass` (dashboards, modals) |
| `glassPanelButtonProps` | Button on a glass surface (avoids opaque solid fill) |
| `glassPanelFieldProps` | Input, textarea, native select on glass |
| `glassPanelBadgeProps` | Small glass chips |
| `glassPanelTableHeaderProps` | Table header row on glass tables |
| `StatCard` | Dashboard stat tile (label + value + optional icon) |
| `EmptyStatePanel` | Centered empty list / table state |
| `ProductSectionHeader` | Dashboard section title (`h2` / `h3`, optional action) |
| `DataTableShell` | Scrollable outline table with optional toolbar |
| `ProductButtonSolid` / `Outline` | Navy CTAs in `(internal)` routes |
| `BrandButtonSolid` / `Outline` | Green CTAs (public routes; same as legacy `MarketingButton*`) |
| `UserAvatar` | Profile menu, lists, headers |
| `StickyGlassHeader` | Sticky dashboard top bar |
| `DashboardPageContainer` | `maxW="2xl"` main column + bottom-nav padding |
| `COLLEGE_COACH_CONTAINER_MAX_W` | `5xl` — college coach dashboard header/content width |

Migration checklist: `plans/2026-05-20--design-system-primitives-migration.md`.

## Storybook

From `pathway-design-system/`:

```bash
npm run storybook        # http://localhost:6006
npm run build-storybook  # static catalog in storybook-static/
```

Stories live next to components (`src/**/*.stories.tsx`). Preview uses `createPathwaySystem()` and dark canvas background.

## Build (`dist/`)

`npm run build` (tsup, `bundle: false`) transpiles every `src/**/*.ts(x)` file to ESM under `dist/` (mirrors `src/` layout). Dependencies stay external — no monolithic marketing bundle — so Next.js SSR works with runtime `dist` entries.

Published tarball includes **`dist`** and **`src`** (reference / deep imports).

| `exports` field | Resolves to |
|-----------------|-------------|
| `types` | `dist/**/*.d.mts` |
| `import` | `dist/**/*.js` |

Next.js apps may keep `transpilePackages: ["@pathway-sg/design-system"]` for Chakra in app boundaries; it is optional when consuming compiled JS.

## Adding UI

1. **New token** — add under `src/tokens/`, wire in `pathway-theme-config.ts` if needed.
2. **Product primitive** — `src/components/primitives/` (one concern per file, export from `index.ts`).
3. **Marketing section** — `src/components/marketing/` until content is app-specific.

## Consumption

```ts
import { createPathwaySystem } from "@pathway-sg/design-system/theme/create-pathway-system";
import { GlassPanel, ProductButtonSolid } from "@pathway-sg/design-system/primitives";
import { SectionHeader } from "@pathway-sg/design-system/marketing";
import { PATHWAY_THEME_STORAGE_KEY, PathwayThemeInitScript } from "@pathway-sg/design-system/foundations";
import { authInputProps, AuthFormShell } from "@pathway-sg/design-system/marketing";
import { ColorModeProvider, PathwayThemeSwitcher } from "@pathway-sg/design-system/providers";
```

Publish semver bumps via `PUBLISHING.md`; each consumer app runs `npm install` in its own directory and pins `@pathway-sg/design-system` from the **npm registry** (never `file:` paths — see `CONSUMERS.md`).
