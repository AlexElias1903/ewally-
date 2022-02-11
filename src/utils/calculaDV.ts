import { somaProduto } from "./somaProduto";
export function calculaDV(codigo: String, tipoBoleto: String): number {
    let codigoSemDV: String;
    let digitoVerificador: number = 0;
    if (tipoBoleto === 'titulos_bancarios') {
        codigoSemDV = codigo.slice(0, 4) + codigo.slice(5, 44);
        let codigoAuxiliar = '4329876543298765432987654329876543298765432';
        for (let i: number = 0; i < 43; i++) {
            digitoVerificador = digitoVerificador + parseInt(codigoSemDV[i]) * parseInt(codigoAuxiliar[i]);
        }
        digitoVerificador = 11 - (digitoVerificador % 11);
        if (digitoVerificador === 0 || digitoVerificador === 10 || digitoVerificador === 11) {
            return 1;
        }
        return digitoVerificador;
    } else {
        codigoSemDV = codigo.slice(0, 3) + codigo.slice(4, 44);
        let codigoAuxiliar = '2121212121212121212121212121212121212121212';
        for (let i: number = 0; i < 43; i++) {
            digitoVerificador = digitoVerificador + somaProduto(parseInt(codigoSemDV[i]) * parseInt(codigoAuxiliar[i]));
        }

        if (digitoVerificador % 10 === 0) {
            return 0
        }
        digitoVerificador = 10 - (digitoVerificador % 10);
        return digitoVerificador;
    }
}