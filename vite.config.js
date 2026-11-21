import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/Projects": "http://localhost:5029",
      "/Account": "http://localhost:5029",
      "/BlogPost": "http://localhost:5029",
    },
  },
});
