// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/global.css"],
  modules: [
    "@nuxt/image",       
    "@nuxt/icon",    
  ],
});
