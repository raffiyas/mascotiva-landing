import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mascotiva.cl',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
