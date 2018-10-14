const pkg = require('./package')
const meta = require('./meta')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'vi-VN'
    },
    title: meta.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: meta.description
      },
      {
        name: 'keywords',
        content: meta.keywords
      },
      {
        name: 'image',
        content: meta.image
      },
      // Google
      {
        itemprop: 'name',
        content: meta.name
      },
      {
        itemprop: 'description',
        content: meta.description
      },
      {
        itemprop: 'image',
        content: meta.image
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: meta.name
      },
      {
        name: 'twitter:description',
        content: meta.description
      },
      // Open Graph
      {
        name: 'og:title',
        content: meta.name
      },
      {
        name: 'og:description',
        content: meta.description
      },
      {
        name: 'og:image',
        content: meta.image
      },
      {
        name: 'og:url',
        content: meta.url
      },
      {
        name: 'og:site_name',
        content: meta.name
      },
      {
        name: 'og:type',
        content: 'website'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'prefetch',
        href: '/about'
      },
      {
        rel: 'prefetch',
        href: '/pricing'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#007bff'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/fonts/Quicksand.css', '~/assets/styles/animate.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-lazyload',
    '~/plugins/font-awesome',
    '~/plugins/bootstrap-vue'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    [
      'bootstrap-vue/nuxt',
      {
        css: false
      }
    ]
    // '@nuxtjs/pwa',
    // '@nuxtjs/manifest',
    // '@nuxtjs/icon',
    // '@nuxtjs/meta'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  extractCSS: true,
  plugins: [
    // ssr: false to only include it on client-side
    {
      src: '~/plugins/bootstrap-vue.js'
    },
    {
      src: '~/plugins/font-awesome.js'
    },
    {
      src: '~/plugins/vue-lazyload.js'
    },
    {
      src: '~/plugins/vue-scroll-reveal',
      ssr: false
    }
  ],
  env: {
    site_name: `- ${meta.name}`,
    site_description: `- ${meta.description}`
  }
}
