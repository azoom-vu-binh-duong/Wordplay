export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
  css: ['~/assets/css/main.css'],
  imports: {
    dirs: ['stores'],
  },
  modules: [
    'nuxt-icon',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },
})
