import express from 'express';
import checkEnvironment from '../helpers/envCheck';

const app = express();

checkEnvironment(app);

export default app;
