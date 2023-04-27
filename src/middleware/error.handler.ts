import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error && err.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'dados inválidos' });
  }
  next();
};

export default errorMiddleware;