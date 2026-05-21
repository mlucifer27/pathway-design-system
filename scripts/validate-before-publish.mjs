#!/usr/bin/env node
/**
 * Runs before npm publish. Ensures package.json metadata and tarball contents are sane.
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

const requiredFields = ["name", "version", "description", "exports"];
const missing = requiredFields.filter((key) => !pkg[key]);
if (missing.length > 0) {
  console.error(`package.json missing: ${missing.join(", ")}`);
  process.exit(1);
}

if (!pkg.name.startsWith("@pathway-sg/")) {
  console.error(`Expected scoped name @pathway-sg/*, got ${pkg.name}`);
  process.exit(1);
}

if (!pkg.license || pkg.license === "UNLICENSED") {
  console.error("package.json must declare a public license (e.g. MIT).");
  process.exit(1);
}

if (!existsSync(join(root, "LICENSE"))) {
  console.error("LICENSE file is required in pathway-design-system/");
  process.exit(1);
}

const packOutput = execSync("npm pack --dry-run --json", { cwd: root, encoding: "utf8" });
const packJson = JSON.parse(packOutput);
const entry = Array.isArray(packJson) ? packJson[0] : packJson;
const files = entry?.files?.map((f) => f.path) ?? [];

const requiredPaths = [
  "package.json",
  "README.md",
  "LICENSE",
  "src/index.ts",
  "src/theme/create-pathway-system.ts",
  "src/components/marketing/index.ts",
  "src/components/primitives/index.ts",
];

const missingFiles = requiredPaths.filter((p) => !files.some((f) => f === p || f.endsWith(`/${p}`)));
if (missingFiles.length > 0) {
  console.error("Tarball missing required paths:", missingFiles.join(", "));
  process.exit(1);
}

console.log(`OK: ${pkg.name}@${pkg.version} — ${files.length} files, ~${entry?.size ?? "?"} bytes`);
