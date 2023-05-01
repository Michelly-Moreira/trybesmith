import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { loginValidation } from '../middleware/validation';

const router = Router();
const usersController = new UsersController();

router.post('/users', (req, res) => usersController.createUser(req, res));

router
  .route('/login')
  .post(loginValidation, usersController.signin);

export default router;