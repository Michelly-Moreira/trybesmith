import express from 'express';
// todas as rotas do projeto são feitas aqui
const app = express();

app.use(express.json());

export default app;
