import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,
  typescript: {
    shim: false,
  },
 

  build: {
    //   extractCSS: false,
    transpile: ["vuetify"],
  },
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      title: "Jean Canales",
    },
  },
  // nitro: {
  //   serveStatic: true,
  // },
  sourcemap: { server: true, client: false },
  devServerHandlers: [],
  hooks: {
    "vite:extendConfig": (config: any) => {
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve("/assets/scss/variables.scss") },
        })
      );
    },
  },
});
