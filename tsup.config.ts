import { readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsup";

const root = dirname(fileURLToPath(import.meta.url));
const srcRoot = join(root, "src");

function walkSrc(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walkSrc(path, out);
      continue;
    }
    if (!/\.(ts|tsx)$/.test(name)) continue;
    if (name.includes(".stories.")) continue;
    out.push(relative(root, path));
  }
  return out;
}

const external = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "@chakra-ui/react",
  "@emotion/react",
  "next",
  "next/link",
  "next/script",
  "react-icons",
  "react-icons/*",
];

export default defineConfig({
  entry: walkSrc(srcRoot),
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  outExtension() {
    return { js: ".js" };
  },
  target: "es2022",
  bundle: false,
  splitting: false,
  external,
  esbuildOptions(options) {
    options.packages = "external";
  },
});
