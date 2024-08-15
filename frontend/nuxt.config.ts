// https://nuxt.com/docs/api/configuration/nuxt-config

const strapiBaseUri = process.env.API_URL || "http://127.0.0.1:1337";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/strapi',
  ],
  strapi: {   
    url: strapiBaseUri,
    prefix: '/api',  
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})