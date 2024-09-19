export default defineNuxtConfig({
  devtools: { enabled: true },

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
        weights: ['700'],
      },
    ],
  },

  runtimeConfig: {
    replicateApiToken: process.env.REPLICATE_API_TOKEN,
  },
})
