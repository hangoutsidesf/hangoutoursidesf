import path from 'path';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import WorkboxPlugin from 'workbox-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'; //eslint-disable-line
import CleanWebpackPlugin from 'clean-webpack-plugin';

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');


module.exports = {
  mode: 'development',
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  entry: ['webpack-hot-middleware/client', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.[hash].js',
    path: DIST_DIR,
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
          // Match any request ends with .jpg
          urlPattern: /http.*jpg/,
          // Apply a cache-first strategy.
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 40,
            },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          // Cache parklet json
          urlPattern: /http.*json/,
          handler: 'cacheFirst',
        },
      ],
    }), new HtmlWebpackPlugin({
      hash: true,
      template: path.join(__dirname, 'client', 'index.html'),
    }),
    new CleanWebpackPlugin(['client/dist']),
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
