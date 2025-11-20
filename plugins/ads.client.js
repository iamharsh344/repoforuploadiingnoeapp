// plugins/ads.client.js
export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        async: true,
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2625601725317470"
      }
    ]
  })
})
