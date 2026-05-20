# @pathway/design-system

Pathway platform design system: Chakra v3 theme, design tokens, foundations, primitives, and marketing sections.

- **Tokens + theme** — shared `createPathwaySystem()` for every app
- **Primitives** — dashboards and product UI (`GlassPanel`, `ProductButton`, `UserAvatar`, …)
- **Marketing** — Netfusion-aligned public pages (`PublicSiteHeader`, `MarketingHero`, …)

## Install

```bash
npm install @pathway/design-system@0.1.0
```

## Imports

| Path | Contents |
|------|----------|
| `@pathway/design-system` | Theme factory, tokens reference, primitives barrel |
| `@pathway/design-system/theme/create-pathway-system` | App `theme/system.ts` |
| `@pathway/design-system/tokens` | Color/spacing modules + `NETFUSION_REFERENCE` |
| `@pathway/design-system/foundations` | `PATHWAY_THEME_STORAGE_KEY`, layout constants |
| `@pathway/design-system/primitives` | Product UI components |
| `@pathway/design-system/marketing` | Public-site sections |

## Local layout

Sibling folders in the editor are **separate projects**. Apps must depend on this package via **npm semver only** — never `file:../pathway-design-system`. See `CONSUMERS.md`.

## License

MIT — see [LICENSE](./LICENSE).

Repo: [Pathway-Sports-Group/pathway-design-system](https://github.com/Pathway-Sports-Group/pathway-design-system). Pushes to `main` publish to npm via GitHub Actions (see `PUBLISHING.md`).

See `ARCHITECTURE.md` and `PUBLISHING.md`.
