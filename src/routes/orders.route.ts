import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const router = Router();
const ordersController = new OrdersController();

router.get('/orders', (req, res) => ordersController.getAll(req, res));

export default router;