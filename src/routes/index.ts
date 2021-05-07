import { Application } from 'express';

import auth from './auth';
import jokes from './jokes';

const routes = (app: Application) => {
  app.use('/', jokes);
  app.use('/auth', auth);
};

export default routes;
