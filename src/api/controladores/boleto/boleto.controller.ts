import { Request, Response, NextFunction } from 'express';
import { InfoBoleto } from '../../../entidades/boleto';
import { codigoDeBarras } from '../../../utils/codigoDeBarras';
import { dataVencimento } from '../../../utils/dataVencimento';
import { valorBoleto } from '../../../utils/valorBoleto';
import { verificaDV } from '../../../utils/verificaDV';
import { verificaQuantidade } from '../../../utils/verificaQuantidade';
import { verificaTipoBoleto } from '../../../utils/verificaTipoBoleto';

export async function buscaAtendimentos(req: Request, res: Response, next: NextFunction) {
    try {
        let linhaDigitavel: String = req.params.linha_digitavel
        let tipoBoleto: String = verificaTipoBoleto(linhaDigitavel)
        let codigoBoleto: String = codigoDeBarras(linhaDigitavel, tipoBoleto)
        verificaQuantidade(linhaDigitavel);
        verificaDV(codigoBoleto, tipoBoleto);
        let informacoesBoleto: InfoBoleto = {
            barCode: codigoDeBarras(linhaDigitavel, tipoBoleto),
            amount: valorBoleto(codigoBoleto, tipoBoleto),
            expirationDate: dataVencimento(codigoBoleto, tipoBoleto)
        }
        res.status(200).json(informacoesBoleto)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            erro: error
        });
    }
}