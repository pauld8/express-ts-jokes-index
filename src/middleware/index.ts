import {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded,
} from 'express';

import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { ExpressJoiError } from 'express-joi-validation';

const middleware = (app: Application) => {
  app.use(urlencoded());
  app.use(cors());
  app.use(morgan('common'));
  app.use(helmet());
};

enum ContainerTypes {
  body = 'body',
  query = 'query',
  headers = 'headers',
  fields = 'fields',
  params = 'params',
}

const afterMiddleware = (app: Application) => {
  app.use(
    (
      err: any | ExpressJoiError,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const expects = req.accepts('json', 'html');

      if (err && err.type in ContainerTypes && expects === 'json') {
        res.status(404).json({ error: true });
        return;
      }

      res.render('404');

      next();
    }
  );
};

export { middleware, afterMiddleware };
