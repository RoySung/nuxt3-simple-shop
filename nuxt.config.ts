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
    '@/assets/style/reset.css',
    '@/assets/style/main.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global.scss";'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true
    }
  }
})
