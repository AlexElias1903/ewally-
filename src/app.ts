import express from 'express';
import { routerPesoa } from './api/controladores/boleto/boletoRota';

const app = express();

app.set('port', 8080);
app.use(routerPesoa);

export default app;