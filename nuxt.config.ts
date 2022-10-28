// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: 'http://localhost:3000/' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
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
