import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { Request, Response, NextFunction } from 'express';

import postsRouter from './routes/post.routes';
import { NotFoundError } from './utils/errors';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api/posts', postsRouter);

// Catch-all route for undefined endpoints
app.use((
    req: Request,
    res: Response,
    next: NextFunction) => {
  next(new NotFoundError(`Route ${req.originalUrl} not found`));
});

// Error Handler
app.use(errorHandler);

export default app;