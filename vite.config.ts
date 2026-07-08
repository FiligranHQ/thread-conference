import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// When SANITY_PROJECT_ID is set (CI with CMS secrets configured), redirect
// @/content/* imports to the generated files written by scripts/fetch-content.ts.
// Without the env var the alias is not added and the original src/content/*.ts
// files are used as-is — no CMS configuration required for local development.
const cmsSrcDir = path.resolve(__dirname, "./src/content/_generated");
const useCms = !!process.env.SANITY_PROJECT_ID;

const contentAlias = useCms
  ? [
      // More-specific aliases must come before the generic "@" alias.
      { find: "@/content/site", replacement: path.join(cmsSrcDir, "site") },
      { find: "@/content/agenda", replacement: path.join(cmsSrcDir, "agenda") },
      { find: "@/content/sections", replacement: path.join(cmsSrcDir, "sections") },
      { find: "@/content/sponsors", replacement: path.join(cmsSrcDir, "sponsors") },
      { find: "@/content/resources", replacement: path.join(cmsSrcDir, "resources") },
    ]
  : [];

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: [
      ...contentAlias,
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
});
