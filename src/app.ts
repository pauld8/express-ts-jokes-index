import express from 'express';
import path from 'path';

import { middleware, afterMiddleware } from './middleware';
import routes from './routes';

const app = express();

app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, '/../public')));

// Setup middleware
middleware(app);

// Setup routes
routes(app);

// After middleware (error handling etc...)
afterMiddleware(app);

export default app;
