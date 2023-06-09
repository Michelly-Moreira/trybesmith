import { Request, Response } from 'express';
import OrderService from '../services/orders.services';
import statusCode from '../statusCode';

export default class OrdersController {
  orderService: OrderService;

  constructor(orderService = new OrderService()) {
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAll();
    res.status(statusCode.OK).json(orders);
  }

  async createOrder(req: Request, res: Response): Promise<Response> {
    const productsIds = req.body;
    const order = await this.orderService.createOrder(productsIds);
    return res.status(statusCode.CREATED).json(order);
  }
}