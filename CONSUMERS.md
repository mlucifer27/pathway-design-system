# Consuming `@pathway-sg/design-system`

## Required

Apps **must** depend on the **npm registry** only:

```json
"@pathway-sg/design-system": "0.1.0"
```

Install inside each app project:

```bash
cd athleteiq && npm install
cd pathway-sports-group-website && npm install
```

Publish a new version from `pathway-design-system/` before bumping the semver in apps.

After the **first** publish, refresh each app (removes any stale `file:` / `link` entries from an old lockfile):

```bash
cd athleteiq && rm -rf node_modules/@pathway-sg/design-system && npm install
cd pathway-sports-group-website && rm -rf node_modules/@pathway-sg/design-system && npm install
```

## Forbidden

Do **not** use filesystem references in consumer `package.json`:

```json
"@pathway-sg/design-system": "file:../pathway-design-system"
```

Do **not** use workspace links, `npm link`, or monorepo hoisting to substitute for the published package. The design system ships via **npm**; other projects are separate repos/folders in the editor only.

## Next.js

Each consumer needs:

```ts
transpilePackages: ["@pathway-sg/design-system"],
```

See `PUBLISHING.md` for publish steps and CI registry auth.
