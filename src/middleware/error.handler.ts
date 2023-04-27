import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error && err.message === 'REQUIRED') {
    return res.status(401).json({ message: 'dados is required' });
  }
  if (err instanceof Error && err.message === 'INVALID') {
    return res.status(401).json({ message: 'dados inválidos' });
  }
  next();
};

export default errorMiddleware;