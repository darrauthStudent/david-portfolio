// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  // 1. Define tu dominio de producción aquí
  site: 'https://blissanalytics.net',
  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
});
