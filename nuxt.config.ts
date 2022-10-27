// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true
    }
  }
})
