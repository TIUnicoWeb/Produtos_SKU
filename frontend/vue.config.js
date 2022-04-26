const path = require("path");

module.exports = {
  devServer: {
    host: process.env.FRONT_SERVER_ADDRESS,
    public: process.env.FRONT_SERVER_ADDRESS + ":" + process.env.FRONT_SERVER_PORT,
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "^/api": {
        target: process.env.FRONT_SERVER_ADDRESS + ":" + process.env.FRONT_SERVER_PORT,
        changeOrigin: true
      },
      "/api": {
        target: process.env.FRONT_SERVER_ADDRESS + ":" + process.env.FRONT_SERVER_PORT,
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  outputDir: path.resolve(__dirname, "../src/www/static"),
  publicPath: '/'+ process.env.SERVICE_NAME
}
