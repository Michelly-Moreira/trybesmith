import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/users.interface';
import connection from '../models/connection';
import UserModel from '../models/users.models';

const secretKey = process.env.JWT_SECRET || 'x';

const configJWT = {
  expiresIn: '1d', // expira em 1 dia
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

  async signin(user: User): Promise<User | undefined > {
    if (!user) {
      throw Error('UNAUTHORIZED');
    }
    const result = await this.model.signin(user);
    return result;
  }
}