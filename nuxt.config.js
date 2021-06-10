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
  ssr: false,
  target: 'static',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // API on server or locally
    //baseUrl: process.env.BASE_URL || 'https://test.laddboxkillarna.se',
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://www.laddboxkillarna.se/api'
        : 'http://localhost:8000',
  },

  env: {
    // env fallback axios
  },

  build: {},

  buildModules: ['@nuxtjs/google-fonts', '@nuxtjs/style-resources'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
        ],
      },
    ],
  ],

  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Roboto: {
        wght: [100, 200, 300, 400, 500, 700, 900],
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
    scss: ['~/assets/css/*.scss'],
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
}
