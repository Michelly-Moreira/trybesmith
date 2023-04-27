import jwt, { SignOptions } from 'jsonwebtoken';
import { BadRequestError, UnauthorizedError } from 'restify-errors';
import User from '../interfaces/users.interface';
import connection from '../models/connection';
import UserModel from '../models/users.models';
/* import {
  userNameValidation, passwordValidation,
} from '../middleware/validation';
   */

/* const httpErrGenerator = (status: number, message: string) => ({
  status, message,
}); */
  
const secretKey = process.env.JWT_SECRET || 'x';

const configJWT = {
  // eslint-disable-next-line @typescript-eslint/indent
  expiresIn: '1d', // expira em 1 minuto
  algorithm: 'HS256',
} as SignOptions;

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async createUser(user: User): Promise<string> {
    await this.model.createUser(user);
    const token = jwt.sign(user, secretKey, configJWT);
    return token;
  }

  async signin(user: User): Promise<string> {
    if (!user.username) {
      throw new BadRequestError('"username" is required');
    }
  
    if (!user.password) {
      throw new BadRequestError('"password" is required');
    }
  
    const isValidUser = await this.model.signin(user);
    if (!isValidUser) {
      throw new UnauthorizedError('Username or password invalid');
    }
  
    const isPasswordValid = await this.model.signin(user);
    if (!isPasswordValid) {
      throw new UnauthorizedError('Username or password invalid');
    }
    const token = jwt.sign(user, secretKey, configJWT);
    return token;
  }
}