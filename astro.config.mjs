import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL at build time (e.g. in the hosting provider) to get correct canonical URLs and sitemap.
const site = process.env.SITE_URL ?? 'https://zetacean.github.io';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  redirects: { '/': '/es/' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } },
    }),
  ],
});
