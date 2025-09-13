// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";

// If you still need your copy plugin, paste it back above and add it to `plugins`.
// It doesn't affect the four HTML pages.

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // copyStaticPreviews(), // <- re-enable if you actually use it
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
    // 👇 THIS is the crucial part: tell Vite to emit all HTML entry points
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        dfy:  resolve(__dirname, "dfy.html"),
        dwy:  resolve(__dirname, "dwy.html"),
        diy:  resolve(__dirname, "diy.html"),
        book: resolve(__dirname, "book.html"),
      },
    },
  },
}));
