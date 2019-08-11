import express from 'express';
import { routeHandler } from './route-handler';

const app = express();
app
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get(/\/(overview|places-to-stay|things-to-do)/, routeHandler);

export default app;
