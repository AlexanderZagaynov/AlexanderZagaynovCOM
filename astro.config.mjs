import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://alexander-zagaynov.com',
  output: 'static',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = '2026-06-07'
        return item
      },
    }),
  ],
})
