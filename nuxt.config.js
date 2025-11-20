// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    experimental: {
        componentIslands: true
      },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  plugins: [ '~/plugins/ads.client.js'],

  gtag: {
    // id: 'G-xx',
    id: 'G-JPLH7VYGF8',
  },

  /// we are using plugin for now 
  // app: {
  //   head: {
        // link: [
        //   { rel: "preconnect", href: "https://pagead2.googlesyndication.com", crossorigin: "" },
        // ]
  //     script: [
  //       {
  //         src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2625601725317470',
  //         async: true,
  //         crossorigin: 'anonymous',
  //       }
  //     ]
    // }
  // }
})
