const {defineConfig} = require('@vue/cli-service')

let path = require('path')
const webpack = require('webpack')
const productionGzipExtensions = ['js', 'css']
const isProd = process.env.NODE_ENV === 'production'

const assetsCDN = {
    // webpack build externals
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        nprogress: 'NProgress',
        clipboard: 'ClipboardJS',
        'js-cookie': 'Cookies'
    },
    css: [],
    js: [
        '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
        '//cdn.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js',
        '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
        '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
        '//cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js',
        '//cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js',
        '//cdn.jsdelivr.net/npm/@antv/data-set@0.11.4/build/data-set.min.js',
        '//cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js'
    ]
}

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "./src/theme/theme.less")],
        }
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                },

            }
        }
    },
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false
}