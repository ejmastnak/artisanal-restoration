// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register"

export default defineConfig({
  site: process.env.SITE_URL || 'https://jemastnak.com',
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
