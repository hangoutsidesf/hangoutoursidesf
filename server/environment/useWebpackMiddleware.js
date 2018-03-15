import {} from 'dotenv/config';

const useWebpackMiddleware = (app) => {
  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('../webpack.dev.config.js');
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }));

    app.use(webpackHotMiddleware(compiler));
  }
};

export default useWebpackMiddleware;
