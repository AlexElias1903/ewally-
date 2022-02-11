import { NumberDigitsException } from "./numberDigitsException";

export function verificaQuantidade(codigo: String): Boolean {
    if (codigo.length === 47 || codigo.length === 48) {
        return true;
    } else {
        throw new NumberDigitsException('number of digits greater than 47 or 48');
    }
}
