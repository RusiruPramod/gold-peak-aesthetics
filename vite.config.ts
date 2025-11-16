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
    chunkSizeWarningLimit: 800, // Increase warning threshold
    rollupOptions: {
      output: {
        manualChunks: {
          // Group React and related libraries
          "react-vendor": ["react", "react-dom"],
          // Group UI libraries (adjust based on what you use)
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu", 
            "@radix-ui/react-select",
            "lucide-react",
            "class-variance-authority",
            "clsx",
            "tailwind-merge"
          ],
          // Group utility libraries
          "utils-vendor": ["date-fns", "axios", "lodash"],
          // If you have large components, split them too
        }
      }
    }
  }
}));