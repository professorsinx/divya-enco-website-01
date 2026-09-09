import { copyFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

function githubPages404Fallback() {
  return {
    name: "github-pages-404-fallback",
    writeBundle() {
      const indexPath = join(process.cwd(), "dist/index.html");
      const fallbackPath = join(process.cwd(), "dist/404.html");

      try {
        copyFileSync(indexPath, fallbackPath);
      } catch {
        // The build always emits index.html first; if that is missing for any reason,
        // the fallback emit should be a no-op rather than fail the docs build.
      }
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "./",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    githubPages404Fallback(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
