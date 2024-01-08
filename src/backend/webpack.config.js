// Generated using webpack-cli http://github.com/webpack/webpack-cli

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'none',
  target: 'node19.9.0',
  entry: path.resolve(__dirname, 'src/result/index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist')
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/result', to: './server', },
        { from: './src/result/web-socket', to: './server/web-socket', },
        { from: './src/result/web-socket/functions', to: './server/web-socket/functions', }
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

