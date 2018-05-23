import express from 'express';
import path from 'path';

import useWebpackMiddleware from './environment/useWebpackMiddleware';
import useMorganMiddleware from './environment/useMorganMiddleware';
import router from './routers/example';
import parklets from './routers/parklets';

const app = express();
const assets = path.resolve(__dirname, '../client/');

useWebpackMiddleware(app);
useMorganMiddleware(app);
app.use(express.static(assets));
app.use('/test', router);
app.use('/parklets', parklets);

export default app;
