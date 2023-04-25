import { Request, Response } from 'express';
import ProductService from '../services/products.services';
import statusCode from '../statusCode';

export default class ProductsController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    res.status(statusCode.CREATED).json(productCreated);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAll();
    res.status(statusCode.OK).json(products);
  }
}
