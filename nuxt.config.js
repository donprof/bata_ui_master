module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Bata online shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Official leading shoe manufacturer & retailer in Kenya. Shop online' },
      {name: 'author', content: 'Bata Kenya'},

      { property: 'og:type', content: 'Website' },
      { property: 'og:title', content: 'Bata Kenya' },
      { property: 'og:site_name', content: 'Bata Kenya' },
      { property: 'og:url', content: 'http://baatkenya.com' },
      { property: 'og:description', content: 'Official leading shoe manufacturer & retailer in Kenya. Shop online' },
      { property: 'og:image', content: 'http://baatkenya.com/img/brand/icon.png' },
      { property: 'article:modified_time', content: '2018-12-19T13:50:44+03:00' },
      { property: 'article:published_time', content: '2018-12-19T13:50:44+03:00' },

      { property: 'og:locale', content: 'en_KE' },
      { property: 'og:locale:alternate', content: 'en_KE' },

      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: 'https://twitter.com/batakenya?lang=en' },
      { property: 'twitter:title', content: 'Bata Shoe Kenya P.L.C' },
      { property: 'twitter:description', content: 'Official leading shoe manufacturer & retailer in Kenya. Shop online'},
      { property: 'twitter:image', content: 'http://baatkenya.com/img/brand/icon.png' },
      { property: 'twitter:creator', content: '@Batakenya' },

      { itemprop: 'name', content: 'Bata kenya' },
      { itemprop: 'description', content: 'Official leading shoe manufacturer & retailer in Kenya. Shop online' },
      { itemprop: 'image', content: 'http://baatkenya.com/img/brand/icon.png' },

      { hid: 'keyword', name: 'keyword', content: 'Bata, Bata Shoe, Bata kenya, Shoes, Shoe manufacturer, Kenya shoes, Shop online, Shop online shoes, Shoes online' },
      { hid: 'description', name: 'description', content: 'Official leading shoe manufacturer & retailer in Kenya. Shop online' },
      
      { name: 'msapplication-TileColor', content: '#A8011F' },
      { name: 'theme-color', content: '#A8011F' },

    ],
    script: [
      // { src: 'https://js.stripe.com/v3/' },
      // {src: 'https://www.paypalobjects.com/api/checkout.js'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/redb.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800'},
      {rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'},
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    'localforage-nuxt',
    '@nuxtjs/pwa',
    // '@nuxtjs/localforage',
    
  ],
  pwa: {
    manifest: {
      name: 'Bata Online Shop',
      lang: 'en'
    },
    workbox: {
      /* workbox options */
    }
  },
  // localforage: {
  //   instances: [{
  //     name: 'bataUser',
  //     storeName: 'images'
  //   }, {
  //     name: 'bataRedirects',
  //     storeName: 'fileSystem'
  //   }]
  // },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          }
        }
      }
    }
  },
  axios: {
    baseURL: 'https://admin.batakenya.co.ke/api'
    // baseURL: 'http://bataadmin.io:8888/api'
  },
  plugins: [
    // './plugins/moment.js',
    './plugins/validation.js',
    './plugins/axios.js',
    './plugins/imageurl.js',
    './plugins/vueModal.js',
    './plugins/elementui.js',
    { src: "~plugins/vue-product-zoomer.js", ssr: false },
    { src: "~plugins/slick-slide.js", ssr: false },
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/3dcarousel.js', ssr: false, },
  ],
  css: [
    '@/assets/libs/@fortawesome/fontawesome-pro/css/all.min.css',
    '@/assets/libs/@fancyapps/fancybox/jquery.fancybox.min.css',
    '@/assets/libs/animate.css/animate.min.css',
    '@/assets/css/normalize.css',
    '@/assets/css/demo.css',
    '@/assets/css/set1.css',
    '@/assets/styles/app.scss',
    '@/assets/styles/slick-carousel/slick/slick.css',
  ],
  script: [
      {src: '/libs/jqueryplugin/jquery.min.js',body: true},
      {src: '/libs/@fancyapps/fancybox/jquery.fancybox.min.js',body: true},
      // {src: '/js/paypal.js',body: true},
      // {src: '/libs/bootstrap/dist/js/bootstrap.bundle.min.js',body: true},
      // {src: '/libs/in-view/dist/in-view.min.js',body: true},
      
      // {src: '/libs/tweenmax/tweenmax.min.js',body: true},
      // {src: '/libs/wavify/wavify.min.js',body: true},
      // {src: '/js/theme.min.js',body: true},
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#2CB888',
    height: '3px'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
        'postcss-url': false,
      }
    },
    vendor:[ 'vue-product-zoomer'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

