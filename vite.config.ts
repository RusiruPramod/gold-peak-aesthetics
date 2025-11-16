import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 🔥 Replace "gold-peak-aesthetics" with your repo name
const repoBase = "/gold-peak-aesthetics/";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? repoBase : "/", // use base only for production
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
}));