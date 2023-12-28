const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  // devtool: 'evel-'
  mode: 'none',
  entry: {

    main: './src/index.tsx',
    home: './src/index.ts'
  },

  target: 'web',

  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,

        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, 'babel.config.js'),
            }
          },


        ],

        exclude: [
          path.resolve(__dirname, "./src/backend")
        ]

      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map.[query]',
      exclude: path.resolve(__dirname, 'src/frontend'),
    }),
    new ESLintPlugin({
      files: path.resolve(__dirname, 'src/'),

    })
  ],
};
