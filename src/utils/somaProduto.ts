export function somaProduto(produto: number): number {
    let produtoString: string = produto.toString();
    if (produtoString.length === 2) {
        return parseInt(produtoString[0]) + parseInt(produtoString[1]);
    } else {
        return parseInt(produtoString);
    }
}