# @pathway-sg/design-system

Pathway platform design system: Chakra v3 theme, design tokens, foundations, primitives, and marketing sections.

- **Tokens + theme** — shared `createPathwaySystem()` for every app
- **Primitives** — dashboards and product UI (`GlassPanel`, `ProductButton`, `UserAvatar`, …)
- **Marketing** — Netfusion-aligned public pages (`PublicSiteHeader`, `MarketingHero`, …)

## Install

```bash
npm install @pathway-sg/design-system@0.1.15
```

## Imports

| Path | Contents |
|------|----------|
| `@pathway-sg/design-system` | Theme factory, tokens reference, primitives barrel |
| `@pathway-sg/design-system/theme/create-pathway-system` | App `theme/system.ts` |
| `@pathway-sg/design-system/tokens` | Color/spacing modules + `NETFUSION_REFERENCE` |
| `@pathway-sg/design-system/foundations` | `PATHWAY_THEME_STORAGE_KEY`, layout constants |
| `@pathway-sg/design-system/primitives` | Product UI components |
| `@pathway-sg/design-system/marketing` | Public-site sections + auth form styles |
| `@pathway-sg/design-system/providers` | `ColorModeProvider`, `PathwayThemeSwitcher` |

## Local layout

Sibling folders in the editor are **separate projects**. Apps must depend on this package via **npm semver only** — never `file:../pathway-design-system`. See `CONSUMERS.md`.

## License

MIT — see [LICENSE](./LICENSE).

Repo: [mlucifer27/pathway-design-system](https://github.com/mlucifer27/pathway-design-system). Pushes to `main` publish to npm via GitHub Actions (see `PUBLISHING.md`).

## Develop

```bash
npm run validate      # typecheck, lint, build dist, pack check
npm run storybook     # primitive catalog on :6006
npm run build-storybook
```

See `ARCHITECTURE.md` and `PUBLISHING.md`.
