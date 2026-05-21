# @pathway-sg/design-system architecture

Platform-wide design consistency for Pathway Sports Group apps (marketing sites today; dashboards and API-backed UIs next).

## Layers

| Layer | Path | Role |
|-------|------|------|
| Reference | `src/tokens/netfusion-reference.ts` | Documented Netfusion Sass values for audits |
| Tokens | `src/tokens/*` | Colors, type, spacing, radii, shadows, semantics, recipes, breakpoints |
| Foundations | `src/foundations/*` | Cross-app constants (theme storage key, layout widths) |
| Theme | `src/theme/*` | Chakra `defineConfig` + `createPathwaySystem()` + global CSS |
| Primitives | `src/components/primitives/*` | Product UI building blocks (glass, buttons, avatar, shells) |
| Marketing | `src/components/marketing/*` | Public-site sections (Netfusion-aligned compositions) |

## Token naming

- **`brand.*`** — Netfusion green (`#02C173`), dark canvas, glass surfaces. Use on public pages and branded moments.
- **`primary.*`** — Navy palette for authenticated dashboards and internal tools.
- **`marketing.*`** — Alias of `brand.*` for existing public-page components; prefer `brand.*` in new code.

## Netfusion alignment

Public marketing components map to Netfusion modules (HeaderV1, SliderV1, `.te-section-title`, etc.). See `docs/netfusion-token-map.md` at repo root.

Motion (`MovefadeUp`), glass panels, and link hovers live in `src/theme/global-styles.ts` so consumers do not duplicate CSS per app.

## Primitives (product UI)

| Primitive | Use when |
|-----------|----------|
| `GlassPanel` | Card/sheet on `bg.glass` (dashboards, modals) |
| `glassPanelButtonProps` | Button on a glass surface (avoids opaque solid fill) |
| `ProductButtonSolid` / `Outline` | Navy CTAs in `(internal)` routes |
| `BrandButtonSolid` / `Outline` | Green CTAs (public routes; same as legacy `MarketingButton*`) |
| `UserAvatar` | Profile menu, lists, headers |
| `StickyGlassHeader` | Sticky dashboard top bar |
| `DashboardPageContainer` | `maxW="2xl"` main column + bottom-nav padding |

Migration checklist: `plans/2026-05-20--design-system-primitives-migration.md`.

## Adding UI

1. **New token** — add under `src/tokens/`, wire in `pathway-theme-config.ts` if needed.
2. **Product primitive** — `src/components/primitives/` (one concern per file, export from `index.ts`).
3. **Marketing section** — `src/components/marketing/` until content is app-specific.

## Consumption

```ts
import { createPathwaySystem } from "@pathway-sg/design-system/theme/create-pathway-system";
import { GlassPanel, ProductButtonSolid } from "@pathway-sg/design-system/primitives";
import { SectionHeader } from "@pathway-sg/design-system/marketing";
import { PATHWAY_THEME_STORAGE_KEY } from "@pathway-sg/design-system/foundations";
```

Publish semver bumps via `PUBLISHING.md`; each consumer app runs `npm install` in its own directory and pins `@pathway-sg/design-system` from the **npm registry** (never `file:` paths — see `CONSUMERS.md`).
