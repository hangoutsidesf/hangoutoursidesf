import {} from 'dotenv/config';

const useWebpackMiddleware = (app) => {
  // disable for global requires since airbnb doesn't like them being in a block
  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    const config = require('../../webpack.dev.config.js');
    const compiler = require('webpack')(config);
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    }));
    app.use(require('webpack-hot-middleware')(compiler));
    /* eslint-enable */
  }
};

export default useWebpackMiddleware;
