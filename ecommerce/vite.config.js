import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@common": "/src/components/common",
      "@form": "/src/components/form",
      "@navigation": "/src/components/navigation",
      "@home": "/src/components/home",
      "@view": "/src/views",
      "@translate": "/src/translate",

      "@hooks": "/src/hooks",
      "@redux": "/src/modules",
      "@mock": "/src/mock",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
