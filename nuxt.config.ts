// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@features": "./app/features",
    "@stores": "./app/stores",
    "#server": "/<rootDir>/server",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-auth-utils"],
  runtimeConfig: {
    gw2ApiBaseUrl: "https://api.guildwars2.com/v2/",
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
