#!/usr/bin/env bash
# Build a tarball for local consumer testing before npm publish.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run validate
npm pack
echo "Install in an app: npm install ../pathway-design-system/pathway-sg-design-system-$(node -p "require('./package.json').version").tgz"
echo "After publishing to npm, set package.json to the same semver and run npm install."
