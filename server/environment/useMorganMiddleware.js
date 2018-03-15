import { } from 'dotenv/config';
import morgan from 'morgan';

const mountMorganMiddleware = (app) => {
  /* istanbul ignore next */
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
};

export default mountMorganMiddleware;
