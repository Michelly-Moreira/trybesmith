import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import { tokenValidation, productValidation } from '../middleware/validation';

const router = Router();
const ordersController = new OrdersController();

router.route('/orders')
  .get(ordersController.getAll)
  .post(tokenValidation, productValidation, ordersController.createOrder);

export default router;