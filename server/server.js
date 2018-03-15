import express from 'express';

import useWebpackMiddleware from './environment/useWebpackMiddleware';
import useMorganMiddleware from './environment/useMorganMiddleware';
import router from './routers/test';

const app = express();

useWebpackMiddleware(app);
useMorganMiddleware(app);
app.use('/test', router);

export default app;
