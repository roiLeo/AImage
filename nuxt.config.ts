export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  imports: {
    dirs: ['stores/**', 'helpers/**'],
  },
  build: {
    transpile: ['trpc-nuxt'],
  },

  runtimeConfig: {
    replicateApiToken: process.env.REPLICATE_API_TOKEN,
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  ui: { global: true },
  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },
})
