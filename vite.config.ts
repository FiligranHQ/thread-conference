import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      // When SANITY_PROJECT_ID is set, the pre-build fetch-content script
      // writes generated TypeScript files to src/content/_generated/.
      // This alias makes every @/content/* import resolve to the generated
      // version automatically, with no changes needed in component code.
      ...(process.env.SANITY_PROJECT_ID
        ? { "@/content": path.resolve(__dirname, "./src/content/_generated") }
        : {}),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
