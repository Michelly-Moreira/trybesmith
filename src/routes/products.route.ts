import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import { nameValidation, amountValidation } from '../middleware/validation';

const router = Router();
const productsController = new ProductsController();

router.route('/products')
  .post(nameValidation, amountValidation, productsController.create)
  .get(productsController.getAll);

export default router;