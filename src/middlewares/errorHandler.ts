import e, { Request, Response, NextFunction } from 'express';

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error'
  });
};

export default errorHandler;