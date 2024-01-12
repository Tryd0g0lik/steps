const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
module.exports = merge(common, {
  watchOptions: {
    ignored: [
      "**/backend",
      "dist\\db",
      "dist\\server",
      "node_modules",
      "**/node_modules"
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),

    },

    watchFiles: [
      'src/'
    ],

    compress: true,
    historyApiFallback: true,
    open: true,
    // port: 8080
  },
})
