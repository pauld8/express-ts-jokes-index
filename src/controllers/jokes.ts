import { Request, Response } from 'express';
import Controller from './controller';

class Jokes extends Controller {
  static index(req: Request, res: Response): void {
    res.redirect('/jokes');
  }

  static list(req: Request, res: Response): void {
    res.render('index', { name: req.query.name });
  }
}

export default Jokes;
