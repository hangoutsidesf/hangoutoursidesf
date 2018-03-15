import express from 'express';
import useWebpackMiddleware from '../helpers/useWebpackMiddleware';

const app = express();

useWebpackMiddleware(app);

export default app;
