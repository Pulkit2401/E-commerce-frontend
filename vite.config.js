import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    sourcemap: true // Enable source maps
  },
  server: {
    proxy: {
      "/api/": "https://genzzz-store.onrender.com",
      "/uploads/": "https://genzzz-store.onrender.com",
    },
  },
});
