/*import { Server } from './server/Server';

server.listen(3333, () => {
  console.log('App rodando na porta 3333');
});*/

// src/index.ts
import app from './server/Server';

app.listen(3333, () => {
  console.log('App rodando na porta 3333');
});
