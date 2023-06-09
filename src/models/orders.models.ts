import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';
import Product from '../interfaces/products.interface';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(
        `SELECT o.id, o.user_id AS userId,
        JSON_ARRAYAGG(p.id) AS productsIds
        FROM Trybesmith.orders AS o
        LEFT JOIN Trybesmith.products AS p
        ON o.id = p.order_id
        GROUP BY o.id`,
      );
    const [rows] = result;
    return rows as Order[];
  }

  async createOrder(order: Order): Promise<Order> {
    const { userId } = order;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (userId) VALUE (?)',
      [userId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...order };
  }

  async setProduct(product: Product): Promise<Product> {
    const { orderId } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET orderId=? WHERE id=?',
      [orderId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}
