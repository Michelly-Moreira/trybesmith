import { Request, Response } from 'express';
import UserService from '../services/users.services';
import statusCode from '../statusCode';

class UsersController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.createUser = this.createUser.bind(this);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body;
    const token = await this.userService.createUser(user);
    res.status(statusCode.CREATED).json({ token });
  }

/* 
  async signin(req: Request, res: Response): Promise<void> {
    const user = req.body;
    if (!user.username) {
      res.status(statusCode.BAD_REQUEST).json({
        message: '"username" is required',
      });
    }
    if (!user.password) {
      res.status(statusCode.BAD_REQUEST).json({
        message: '"password" is required',
      });
    }
    if (typeof user.username !== 'string') {
      res.status(statusCode.UNAUTHORIZED).json({
        message: 'Username or password invalid',
      });
    }
    if (typeof user.password !== 'string') {
      res.status(statusCode.UNAUTHORIZED).json({
        message: 'Username or password invalid',
      });
    }
    const token = await this.userService.signin(user);
    res.status(statusCode.OK).json({ token });
  } */
} 

export default UsersController;