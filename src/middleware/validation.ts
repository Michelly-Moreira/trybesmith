import { Request, Response, NextFunction } from 'express';
import statusCode from '../statusCode';

const nameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({
      message: '"name" must be a string',
    });
  }
  if (typeof name === 'string' && name.length < 3) {
    return res.status(422).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  return next();
};

const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({
      message: '"amount" is required',
    });
  }
  if (typeof amount !== 'string') {
    return res.status(422).json({
      message: '"amount" must be a string',
    });
  }
  if (amount.length < 2) {
    return res.status(422).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  return next();
};

const userNameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      message: '"username" is required',
    });
  }
  if (username.length < 3) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }
  if (typeof username !== 'string') {
    return res.status(422).json({
      message: '"username" must be a string',
    });
  }
  return next();
};

const vocationValidation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
     
  if (!vocation) {
    return res.status(400).json({
      message: '"vocation" is required',
    });
  }
  if (vocation.length < 3) {
    return res.status(422).json({
      message: '"vocation" length must be at least 3 characters long',
    });
  }
  if (typeof vocation !== 'string') {
    return res.status(422).json({
      message: '"vocation" must be a string',
    });
  }
  return next();
};

const levelValidation = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
     
  if (typeof level === 'undefined') {
    return res.status(400).json({
      message: '"level" is required',
    });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({
      message: '"level" must be a number',
    });
  }
  if (level <= 0) {
    return res.status(422).json({
      message: '"level" must be greater than or equal to 1',
    });
  }
  return next();
};

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  if (typeof password !== 'string') {
    return res.status(422).json({
      message: '"password" must be a string',
    });
  }  
  if (password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
  return next();
};

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"password" is required' });
  }
  return next();
};

export {
  nameValidation,
  amountValidation,
  userNameValidation,
  vocationValidation,
  levelValidation,
  passwordValidation,
  loginValidation,
};