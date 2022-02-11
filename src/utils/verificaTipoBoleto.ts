export function verificaTipoBoleto(codigo: String): String {
    if (codigo[0] === '8') {
        return 'pagamento_concesserionaria';
    }
    return 'titulos_bancarios';
}