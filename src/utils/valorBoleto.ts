
export function valorBoleto(codigo: String, tipoBoleto: String): String {
    let valorBoleto: String;
    if (tipoBoleto === 'pagamento_concesserionaria') {
        valorBoleto = parseInt(codigo.slice(4, 15)).toString();
    } else {
        valorBoleto = parseInt(codigo.slice(10, 19)).toString();
    }
    let len: number = valorBoleto.length;
    let valorFormatado: String = valorBoleto.substring(0, len - 2) + "." + valorBoleto.substring(len - 2);
    return (valorFormatado);
}