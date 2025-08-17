// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/eslint'],

  nitro: {
    storage: {
      db: {
        driver: 'fs',
        base: './.data',
      },
    },
  },

  $production: {
    nitro: {
      storage: {
        db: {
          driver: 'netlify-blobs',
          name: 'db',
        },
      },
    },
  },
});
