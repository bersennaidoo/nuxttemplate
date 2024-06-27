// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt with bootstrap 5",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "SSG Bootstrap5 template" },
        { name: "keywords", content: "Vue, Nuxt, SSR" }
      ],
      script: [
        { src: "/js/bootstrap.bundle.min.js", async: true, defer: true, tagPosition: "bodyClose" }
      ],
      link: [
        { rel: "stylesheet", href: "/icons/bootstrap-icons.min.css" }
      ],
    }
  },
  css: [
    "@/assets/sass/bootstrap.scss",
  ]
})
