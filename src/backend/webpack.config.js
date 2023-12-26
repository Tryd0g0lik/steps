// Generated using webpack-cli http://github.com/webpack/webpack-cli

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'none',
  target: 'node18.18',
  // entry: './src/index.ts',
  entry: path.resolve(__dirname, 'src/result/index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist')
  },
  // output: {
  //   filename: 'server.js',// 'backend.[contenthash].js',
  //   path: path.resolve(__dirname, '../../dist'),

  //   // clean: true
  // },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/result', to: './server', }
      ],
    }),
  ],
  module: {
    rules: [
      // Add your rules for custom modules here
      // Learn more about loaders from http://webpack.js.org/loaders/

    ],
    exprContextCritical: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
}

// module.exports = () => {}
// 'production';
// 'development';

