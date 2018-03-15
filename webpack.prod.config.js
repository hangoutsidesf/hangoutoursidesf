const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
require('dotenv').config();

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/client/dist',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
