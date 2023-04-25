import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interface';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) { 
    this.connection = connection;
  }

  async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT FROM products');
    const [rows] = result;
    return rows as Product[];
  }
}