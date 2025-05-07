

import { Request, Response, NextFunction } from 'express';
import  express from 'express';
const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('API rodando!');
    return
});

export { server };