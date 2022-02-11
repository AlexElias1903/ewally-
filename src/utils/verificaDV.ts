import { calculaDV } from "./calculaDV";
import { DvException } from "./dvException";

export function verificaDV(codigo: String, tipoBoleto: String): Boolean {
    if (tipoBoleto === 'titulos_bancarios') {
        let digitoVerificador: string = codigo.slice(4, 5);
        if (parseInt(digitoVerificador) === calculaDV(codigo, tipoBoleto)) {
            return true;
        }
        throw new DvException('verifying digit');
    } else {
        let digitoVerificador: string = codigo.slice(3, 4);
        if (parseInt(digitoVerificador) === calculaDV(codigo, tipoBoleto)) {
            return true;
        }
        throw new DvException('verifying digit');
    }

}