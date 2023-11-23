/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image", ["@pinia/nuxt", { autoImports: ["defineStore"] }]],
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/styles.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      baseApiUrl: process.env.BASE_API_URL,
    },
  },
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
