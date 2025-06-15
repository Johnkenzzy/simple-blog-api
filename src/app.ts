import express from 'express';
import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Error Handler
app.use(errorHandler);

export default app;