import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://chelo67.github.io',
    base: '/astro-api/',
    outDir: 'public',
  publicDir: 'static',
});
