import path from 'path';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const PUBLIC_PATH = 'http://localhost:8080';

module.exports = {
  mode: 'development',
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  entry: ['webpack-hot-middleware/client', `${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: PUBLIC_PATH,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SWPrecacheWebpackPlugin({
      cacheId: 'hangoutsidesf',
      filename: 'hangoutsidesf-service-worker.js',
      staticFileGlobs: [
        'client/*.css',
        'client/*.html',
        'client/mapconfig.js'
      ],
      minify: true,
      navigateFallback: PUBLIC_PATH + '/',
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      runtimeCaching: [{
        urlPattern: "(.*)",
        handler: "cacheFirst"
      }]
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
