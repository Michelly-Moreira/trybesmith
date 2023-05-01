// import { BadRequestError } from 'restify-errors';
import Product from '../interfaces/products.interface';
import connection from '../models/connection';  
import ProductModel from '../models/products.models';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}