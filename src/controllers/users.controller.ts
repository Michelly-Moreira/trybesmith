/* import { Request, Response } from 'express';
import UserService from '../services/users.services';
import statusCode from '../statusCode';

class UsersController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    res.status(statusCode.CREATED).json(userCreated);
  }
}

export default UsersController; */