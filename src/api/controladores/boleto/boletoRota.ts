
import *  as atendimentoController from './boleto.controller';
import { Router } from 'express';

const routerPesoa = Router();
export const path = '/boleto';

routerPesoa.get(`${path}/:linha_digitavel`, atendimentoController.buscaAtendimentos)

export { routerPesoa };