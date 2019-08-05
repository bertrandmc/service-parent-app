import express from 'express';
import { routeHandler } from './route-handler';
import 'isomorphic-fetch';

const index = express();
index
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get(/\/(overview|places-to-stay)/, routeHandler);

export default index;
