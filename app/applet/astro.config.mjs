import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vincentiwadsworth.github.io',
  base: '/cbhe',
  server: {
    port: 3000,
    host: true
  },
  integrations: [tailwind()]
});
