/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [["@pinia/nuxt", { autoImports: ["defineStore"] }]],
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
