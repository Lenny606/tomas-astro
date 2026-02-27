import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomasastro.cz',
  output: 'server',

  i18n: {
    defaultLocale: 'cz',
    locales: ['cz', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [react(), sitemap()],

  adapter: node({
    mode: 'standalone'
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});