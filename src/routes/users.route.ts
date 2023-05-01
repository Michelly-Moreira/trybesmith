import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import {
  userNameValidation,
  passwordValidation,
  vocationValidation,
  levelValidation,
  loginValidation,
} from '../middleware/validation';

const router = Router();
const usersController = new UsersController();

router
  .route('/users')
  .post(
    userNameValidation,
    vocationValidation,
    levelValidation,
    passwordValidation,
    usersController.createUser,
  );

router
  .route('/login')
  .post(loginValidation, usersController.signin);

export default router;