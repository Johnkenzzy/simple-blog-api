import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import postsRouter from './routes/post.routes';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api/posts', postsRouter);

// Error Handler
app.use(errorHandler);

export default app;