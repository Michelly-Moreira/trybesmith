import { Request, Response } from 'express';
import ProductService from '../services/products.services';
import statusCode from '../statusCode';

class ProductsController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    res.status(statusCode.CREATED).json(productCreated);
  }
}

export default ProductsController;