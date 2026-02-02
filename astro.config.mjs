// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        "portfoliodavid-portfolio-fna8bt-8ce909-151-245-32-213.traefik.me"
      ]
    }
  },

  output: 'server',

  adapter: node({
    mode: 'standalone'
  }),

  integrations: [react()],
});
