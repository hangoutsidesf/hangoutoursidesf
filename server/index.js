const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

require('dotenv').config();

const app = express();
const config = require('../webpack.config.js');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT);
