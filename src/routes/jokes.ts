import { Application, NextFunction, Request, Response, Router } from 'express';
import Jokes from '../controllers/jokes';

const router = Router();

router.get('/', Jokes.index);
router.get('/jokes', Jokes.list);

export default router;
