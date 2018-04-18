import path from 'path';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');


module.exports = {
  mode: 'development',
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  entry: ['webpack-hot-middleware/client', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      // Exclude images from the precache
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      // Define runtime caching rules.
      runtimeCaching: [
        {
          // Match any request ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /http.*jpg/,
          // Apply a cache-first strategy.
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 20
            },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: /http.*json/,
          handler: 'cacheFirst'
        }
      ],
    })
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
