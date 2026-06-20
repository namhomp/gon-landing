// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gon.buildwithoracle.com',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.COMMIT_HASH': JSON.stringify(process.env.COMMIT_HASH || 'dev'),
      'import.meta.env.BUILD_DATE': JSON.stringify(process.env.BUILD_DATE || new Date().toISOString()),
      'import.meta.env.BRANCH': JSON.stringify(process.env.BRANCH || 'main'),
    },
  },
});
