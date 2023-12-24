const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
module.exports = merge(common, {
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),

    },

    watchFiles: [
      'src/'
    ],
    exclude: [
      "src/backend"
    ],
    compress: true,
    historyApiFallback: true,
    open: true,
    // port: 8080
  },
})
