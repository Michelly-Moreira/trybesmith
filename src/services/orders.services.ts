import Order from '../interfaces/orders.interface';
import connection from '../models/connection';
import OrderModel from '../models/orders.models';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}