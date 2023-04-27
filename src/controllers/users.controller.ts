import { Request, Response } from 'express';
import UserService from '../services/users.services';
import statusCode from '../statusCode';

class UsersController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const token = await this.userService.createUser(user);
    return res.status(statusCode.CREATED).json({ token });
  }

  async signin(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    if (!user.username) {
      return res.status(statusCode.BAD_REQUEST).json({
        message: '"username" is required',
      });
    }
    if (!user.password) {
      return res.status(statusCode.BAD_REQUEST).json({
        message: '"password" is required',
      });
    }
    if (typeof user.username !== 'string' || typeof user.password !== 'string') {
      return res.status(statusCode.UNAUTHORIZED).json({
        message: 'Username or password invalid',
      });
    }
    const token = await this.userService.signin(user);
    return res.status(statusCode.OK).json({ token });
  }
} 

export default UsersController;