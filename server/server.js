import express from 'express';
import useWebpackMiddleware from './environment/useWebpackMiddleware';

const app = express();

useWebpackMiddleware(app);

export default app;
