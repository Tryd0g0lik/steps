// Generated using webpack-cli http://github.com/webpack/webpack-cli

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'none',
  target: 'node19.9',
  entry: path.resolve(__dirname, '../../dist/server/index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist')
  },

  plugins: [
    new CopyPlugin({
      patterns: [

        { from: './src/db', to: './db', }

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

