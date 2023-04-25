import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();
const productsController = new ProductsController();

router.post('/products', (req, res) => productsController.create(req, res));
router.get('/products', (req, res) => productsController.getAll(req, res));

export default router;