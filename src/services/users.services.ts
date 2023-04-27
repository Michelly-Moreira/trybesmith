import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/users.interface';
import connection from '../models/connection';
import UserModel from '../models/users.models';
/* import {
  userNameValidation, vocationValidation, levelValidation, passwordValidation, loginValidation,
} from '../middleware/validation';

const httpErrGenerator = (status: number, message: string) => ({
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
    await this.model.signin(user); 
    const token = jwt.sign(user, secretKey, configJWT);
    return token;
  }
}