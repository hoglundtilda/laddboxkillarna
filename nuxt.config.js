export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Laddboxkillarna',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'gtm-script1',
        src: 'https://www.googletagmanager.com/ns.html?id=GTM-5JJFTWJ',
        defer: true,
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5JJFTWJ')
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
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
        : 'http://localhost:5050',
  },

  env: {
    // env fallback axios
  },

  build: {},

  buildModules: ['@nuxtjs/google-fonts', '@nuxtjs/style-resources'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm',
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

  /*  gtm: {
    id: process.env.GTM_ID,

    enabled: true,
    autoInit: true,
    pageTracking: true,
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GTM_ID,
    },
  },
 */
  // googleAnalytics: {
  //   id: process.env.GOOGLE_ANALYTICS_ID,
  //   autoTracking: {
  //     screenview: true
  //   }
  // },

  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: process.env.GOOGLE_ANALYTICS_ID
  //   }
  // },

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

  plugins: ['@/plugins/vant', '@/plugins/gtm'],

  styleResources: {
    scss: ['~/assets/css/*.scss'],
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
}
