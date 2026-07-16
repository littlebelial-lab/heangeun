import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/heangeun/" : "/",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 4180,
    strictPort: true,
  },
});
