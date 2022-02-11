
import { DateException } from "./dateException";
export function dataVencimento(codigo: String, tipoBoleto: String): String {
    if (tipoBoleto === 'titulos_bancarios') {
        let dataAuxiliar: Date = new Date('1997-10-07T00:00:00');
        let data: number = parseInt(codigo.slice(5, 9));
        dataAuxiliar.setDate(dataAuxiliar.getDate() + data)
        let dataFormatada: String = dataAuxiliar.toISOString().slice(0, 10)
        return dataFormatada;
    } else {
        let campoLivre: String = codigo.slice(23, 44);
        let data: Date = new Date(`${campoLivre.slice(0, 4)}-${campoLivre.slice(4, 6)}-${campoLivre.slice(6, 8)}`)
        if (isNaN(data.getTime())) {
            return ''
        }
        let dataFormatada: String = data.toISOString().slice(0, 10)
        return dataFormatada;
    }
}