// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  apollo: {
    clientAwareness: true,
    clients: {
      default: {
        defaultOptions: {
          mutate: {
            fetchPolicy: "no-cache",
          },
          query: {
            fetchPolicy: "no-cache",
          },
        },
        httpEndpoint: "http://localhost:4000",
      },
    },
  },

  compatibilityDate: "2024-04-03",

  devtools: { enabled: true },

  devServer: {
    port: 3500,
  },

  modules: ["@nuxt/eslint", "@nuxtjs/apollo"],

  srcDir: "./src",
});
