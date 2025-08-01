import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://serpdownloaders.github.io',
  base: '/',
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      customPages: [
        'https://serpdownloaders.github.io/',
        'https://serpdownloaders.github.io/about',
        'https://serpdownloaders.github.io/contact',
        'https://serpdownloaders.github.io/privacy',
        'https://serpdownloaders.github.io/terms',
        'https://serpdownloaders.github.io/affiliate-disclaimer',
        'https://serpdownloaders.github.io/blog',
      ]
    })
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
