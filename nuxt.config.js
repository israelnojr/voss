export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      // Google fonts
      {
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
        rel: "stylesheet"
      },
      {
        href:
          "https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700",
        rel: "stylesheet"
      }
    ],
    script: [
      {
        src: "js/vendors.bundle.js"
      },
      {
        src: "js/scripts.bundle.js"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "assets/css/vendors.bundle.css",
    "assets/css/styles.bundle.css"
    // "iview/dist/styles/iview.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  // plugins: ["@/plugins/iview"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
