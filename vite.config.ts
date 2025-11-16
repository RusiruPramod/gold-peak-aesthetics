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
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [], // Remove any external dependencies that should be bundled
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom',
            // Remove 'react/jsx-runtime' from manual chunks - let Vite handle it
          ]
        }
      }
    }
  }
}));