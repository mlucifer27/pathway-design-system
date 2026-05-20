# Publishing `@pathway/design-system` to npm

This package is **ready to publish** as TypeScript source. Consumers must use **Next.js 14+** with `transpilePackages: ["@pathway/design-system"]` (already set in both apps).

## Prerequisites (one-time)

### 1. npm account and `@pathway` scope

1. Create an account at [npmjs.com](https://www.npmjs.com/signup).
2. Create an npm **organization** named `pathway`, **or** use your user scope and rename the package (e.g. `@youruser/design-system`).
3. Confirm you can publish to the scope:

```bash
npm whoami
npm org ls pathway   # if using an org
```

If `@pathway` is taken by someone else, pick another scope and update `name` in `package.json` before publishing.

### 2. License

The package is **MIT** licensed. `LICENSE` is included in the npm tarball (copyright Pathway Sports Group, 2026). To change the holder or year, edit `LICENSE` and keep `package.json` `"license": "MIT"` in sync.

### 3. GitHub repo and automation token

**Repository:** [github.com/Pathway-Sports-Group/pathway-design-system](https://github.com/Pathway-Sports-Group/pathway-design-system)

1. npm → Account → **Access Tokens** → **Generate New Token** → type **Automation** (publish + read).
2. GitHub → **Pathway-Sports-Group/pathway-design-system** → **Settings → Secrets and variables → Actions** → **New repository secret** → name `NPM_TOKEN`, paste the token.
3. Push to `main` (or run the **Publish to npm** workflow manually under Actions). The workflow publishes only when the version in `package.json` is **not** already on npm.

---

## Pre-publish checklist (local)

From the repo root:

```bash
npm run pack:check
node scripts/validate-before-publish.mjs
```

Confirm:

- [ ] Version in `package.json` is the one you intend to ship (`0.1.0` for first release).
- [ ] **Publish before** consumer apps can install (package must exist on npm).
- [ ] Both apps use **registry semver only** (never `file:` paths):

```json
"@pathway/design-system": "0.1.0"
```

See `CONSUMERS.md` — filesystem references are not allowed.

- [ ] After publish, run `npm install` inside each app directory.
- [ ] `next.config.ts` in each app includes:

```ts
transpilePackages: ["@pathway/design-system"],
```

- [ ] Apps install peers: `@chakra-ui/react`, `@emotion/react`, `next`, `react`, `react-dom`.

---

## First publish (manual)

```bash
npm login
npm publish --access public
```

Scoped public packages **must** use `--access public` (also set in `publishConfig`).

Verify on npm:

```bash
npm view @pathway/design-system version
npm view @pathway/design-system exports
```

---

## After publish: consuming from npm

Each app is its own project. Run `npm install` **inside** `athleteiq/` or `pathway-sports-group-website/`, not from a parent folder.

1. Publish the package (above).
2. Keep app dependency as semver, e.g. `"0.1.0"`.
3. Ensure install can reach npm (see `.npmrc` below).

### Registry auth (CI and machines without your npm login)

In each app or repo root `.npmrc` (do **not** commit tokens):

```
@pathway:registry=https://registry.npmjs.org
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

The **Publish to npm** workflow in this repo sets `registry-url` and uses `NPM_TOKEN`.

### Install in an app

```bash
npm install @pathway/design-system@0.1.0
```

Peer dependencies must be installed in the app (see `package.json` `peerDependencies`).

---

## Version bumps (every release)

1. Make changes under `pathway-design-system/`.
2. Bump `version` in `pathway-design-system/package.json` (semver).
3. Publish:

```bash
npm publish --access public
```

4. Bump both apps:

```json
"@pathway/design-system": "0.1.1"
```

5. In each app: `npm install`
6. Verify: `npm run build` in each app directory

---

## Automatic publish (GitHub Actions)

Workflow: `.github/workflows/publish-npm.yml` in this repo.

| Trigger | Behavior |
|---------|----------|
| Push to `main` | Validate → publish if version is new on npm |
| **workflow_dispatch** | Same (manual run from Actions tab) |

**Requires:** repository secret `NPM_TOKEN` (npm Automation token).

**Release process:** bump `version` in `package.json`, commit, push to `main`. CI publishes `@pathway/design-system@<version>`. Pushes without a version bump skip publish (no failed job).

---

## What gets published

Controlled by `files` in `package.json`:

- `src/**` (TypeScript source)
- `README.md`
- `LICENSE` (MIT)

Not published: `ARCHITECTURE.md`, `PUBLISHING.md`, scripts (validation runs locally/CI only via git checkout).

---

## Cost

| Registry | Public package |
|----------|----------------|
| [npmjs.com](https://www.npmjs.com/) | **Free** for public scoped packages |
| Private npm | Paid |

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `402 Payment Required` on publish | Use `--access public` for scoped package |
| `403 Forbidden` / scope | Create org `@pathway` or change package name |
| App build: cannot resolve module | Run `npm install`; check version exists on npm |
| App build: syntax error in node_modules | Add `transpilePackages: ["@pathway/design-system"]` |
| `ERESOLVE` peer deps | Install matching `@chakra-ui/react`, `next`, `react` in the app |

---

## Enhance later (not required for v0.1.0)

- Compiled `dist/` + `types` via `tsup` (for non-Next consumers)
- Storybook / visual regression
- Changesets or semantic-release for version bumps
- Private registry (GitHub Packages) instead of public npm
