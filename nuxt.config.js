export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'laddboxkillarna',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  components: true,
  target: 'static',
  ssr: false,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // API on server or locally
    baseUrl: process.env.BASE_URL || 'http://test.laddboxkillarna.se',
  },

  env: {
    // env fallback axios
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  buildModules: ['@nuxtjs/google-fonts'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          //import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          //import 2 icons from set
          // please note this is PRO set in this example,
          // you must have it in your node_modules to actually import
        ],
      },
    ],
  ],

  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Roboto: {
        wght: [100, 300, 400, 500, 700, 900],
        ital: [100, 300, 400, 500, 700],
      },
      Saira: {
        wght: [100, 300, 400, 500, 700, 900],
        ital: [100, 300, 400, 500, 700],
      },
    },
  },

  css: [
    'vant/lib/index.css',
    //'~assets/css/main.scss'
  ],

  plugins: ['@/plugins/vant'],

  styleResources: {
    scss: ['~assets/css/*.scss'],
  },
}
