export function codigoDeBarras(linhaDigitavel: String, tipoBoleto: String): String {
    let codigo: String;
    if (tipoBoleto === 'titulos_bancarios') {
        codigo = linhaDigitavel.slice(0, 4) + linhaDigitavel.slice(32, 47) + linhaDigitavel.slice(4, 9) + linhaDigitavel.slice(10, 20) + linhaDigitavel.slice(21, 31);
    }
    else {
        codigo = linhaDigitavel.slice(0, 11) + linhaDigitavel.slice(12, 23) + linhaDigitavel.slice(24, 35) + linhaDigitavel.slice(36, 47);
    }
    return codigo;
}