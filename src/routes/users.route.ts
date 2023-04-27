import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();
const usersController = new UsersController();

router.post('/users', (req, res) => usersController.createUser(req, res));
router.post('/login', (req, res) => usersController.signin(req, res));

export default router;