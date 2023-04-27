import express, { Request, Response } from 'express';
import statusCodes from './statusCode';
import 'express-async-errors';
import ProductsRoutes from './routes/products.route';
import OrdersRoutes from './routes/orders.route';
import UsersRoutes from './routes/users.route';
// import errorMiddleware from './middleware/error.handler';

// todas as rotas do projeto são feitas aqui
const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(statusCodes.OK).send('Express + TypeScript');
});

app.use(ProductsRoutes);
app.use(OrdersRoutes);
app.use(UsersRoutes);
// app.use(errorMiddleware);

// middleware de erro
/* app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    const { name, message, details } = err as any;
    console.log(`name: ${name}`);
    switch (name) {
      case 'BadRequestError':
        res.status(400).json({ message });
        break;
      case 'ValidationError':
        res.status(400).json({ message: details[0].message });
        break;
      case 'NotFoundError':
        res.status(404).json({ message });
        break;
      case 'ConflictError':
        res.status(409).json({ message });
        break;
      default:
        console.error(err);
        res.sendStatus(500);
    }
    next();
  }); */
  
export default app;
