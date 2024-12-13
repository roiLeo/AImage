export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  modules: [
    '@nuxt/ui',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  imports: {
    dirs: ['stores/**', 'helpers/**'],
  },

  build: {
    transpile: ['trpc-nuxt'],
  },

  ui: { global: true },

  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },

  fonts: {
    families: [
      {
        name: 'Akira',
        provider: 'local',
      },
    ],
  },

  runtimeConfig: {
    replicateApiToken: process.env.REPLICATE_API_TOKEN,
  },

  compatibilityDate: '2024-09-19',
})
