import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/gold-peak-aesthetics/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          // Only chunk specific large NON-React libraries
          "ui-libs": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "lucide-react",
            "class-variance-authority", 
            "clsx",
            "tailwind-merge"
          ],
          "utils-libs": [
            "date-fns",
            "axios", 
            "lodash"
          ],
          // Add other large non-React dependencies from your package.json here
        }
      }
    }
  }
}));