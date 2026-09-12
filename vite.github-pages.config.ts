import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

function githubPagesStaticRouteFallbacks() {
  return {
    name: "github-pages-static-route-fallbacks",
    writeBundle() {
      const indexPath = join(process.cwd(), "dist/index.html");
      const fallbackPath = join(process.cwd(), "dist/404.html");

      try {
        copyFileSync(indexPath, fallbackPath);
      } catch {
        // Ignore if the generated index file is absent before the output step writes.
      }

      const routes = ["about", "careers", "contact", "projects"];

      for (const route of routes) {
        const folder = join(process.cwd(), "dist", route);
        const target = join(folder, "index.html");

        try {
          mkdirSync(folder, { recursive: true });

          const raw = readFileSync(indexPath, "utf8");
          const routeIndex = raw
            .replace(/src="\.\/assets\//g, 'src="../assets/')
            .replace(/href="\.\/([^\"]+)"/g, 'href="../$1"');
          writeFileSync(target, routeIndex);
        } catch {
          // Route directory copy is best-effort so the primary static shell is still emitted.
        }
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
    githubPagesStaticRouteFallbacks(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
