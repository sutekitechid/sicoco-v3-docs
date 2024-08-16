import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://sutekitechid.github.io',
  base: 'sicoco-v3-docs',
  // redirects: {
  //   '/': '/sicoco-v3-docs',
  // },
  integrations: [
    starlight({
      title: 'Sicoco v3',
      social: {
      github: 'https://github.com/sutekitechid/sicoco-v3',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
              {
                label: 'Introduction',
                slug: 'getting-started/overview',
              },
              {
                label: 'Installation & Setup',
                slug: 'getting-started/installation',
              },
              {
                label: 'Contributing',
                slug: 'getting-started/contributing',
              },
            ],
          },
          {
            label: 'Components',
            autogenerate: {
              directory: 'components',
            },
          },
          {
            label: 'Forms',
            autogenerate: {
              directory: 'forms',
            },
          },
          {
            label: 'Reference',
            autogenerate: {
              directory: 'reference',
            },
          },
        ],
    }),
    vue({ appEntrypoint: '/src/pages/_app' }),
    tailwind(),
	],
})