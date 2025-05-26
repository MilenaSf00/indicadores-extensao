/*import type { Request, Response } from 'express';
import express from 'express';
const server = express();

server.get('/', (req: Request, res: Response) => {
  res.send('API rodando!');
});
export { server };*/


import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import { routes } from '../modules/routes';
import { AppError } from '../errors/AppErros'; // Certifique-se que o caminho esteja correto
import '@prisma/client';
import '../index'; // Certifique-se que o caminho esteja correto

const app = express();

app.use(cors()); // Habilita CORS para permitir requisições de outras origens
app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

app.use(routes); // Suas rotas

// Middleware para tratamento de erros
// Middleware para tratamento de erros simples
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('Server is running on port 3333!!'));


export default app;