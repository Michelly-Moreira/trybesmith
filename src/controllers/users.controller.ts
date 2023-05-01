import { Request, Response } from 'express';
import UserService from '../services/users.services';
import statusCode from '../statusCode';
import generateToken from '../auth';

export default class UsersController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.createUser = this.createUser.bind(this);
    this.signin = this.signin.bind(this);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const token = await this.userService.createUser(user);
    return res.status(statusCode.CREATED).json({ token });
  }

  async signin(req: Request, res: Response): Promise<void | Response> {
    const data = req.body;
    const user = await this.userService.signin(data);

    // testando se o usuário e a senha contém no banco de dados
    if (typeof user === 'undefined') {
      return res.status(statusCode.UNAUTHORIZED).json({
        message: 'Username or password invalid',
      });
    }
    const token = generateToken(Number(user.id));
    return res.status(statusCode.OK).json({ token });
  }
}