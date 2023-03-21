import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000'
      }
    }
  },
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
