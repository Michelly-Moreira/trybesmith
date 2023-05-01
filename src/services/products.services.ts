// import { BadRequestError } from 'restify-errors';
import Product from '../interfaces/products.interface';
import connection from '../models/connection';  
import ProductModel from '../models/products.models';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  static validateProperties(product: Product): [boolean, string | null] {
    const properties = ['name', 'amount'];
    
    for (let i = 0; i < properties.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
        return [false, properties[i]];
      }
    }
    
    return [true, null];
  }
    
  static validateValues(product: Product): [boolean, string | null] {
    const entries = Object.entries(product);

    for (let i = 0; i < entries.length; i += 1) {
      const [property, value] = entries[i];

      if (!value) {
        return [false, property];
      }
    }

    return [true, null];
  }

  static validationProduct(product: Product): void | string {
    let [valid, property] = ProductService.validateProperties(product);

    if (!valid) {
      return `${property} is required`;
    }

    if (typeof valid !== 'string') {
      return `${property} must be a string`;
    }
    [valid, property] = ProductService.validateValues(product);

    if (!valid) {
      return `O campo ${property} não pode ser nulo ou vazio.`;
    }
  }

  create(product: Product): Promise<Product> {
    const isValidProduct = ProductService.validationProduct(product);
    
    if (typeof isValidProduct === 'string') {
      // throw new BadRequestError(isValidProduct);
    }
    return this.model.create(product);
  }

  async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}