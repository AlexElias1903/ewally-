import { NumberDigitsException } from "./numberDigitsException";

export function verificaLinhaDigitavel(codigo: String): Boolean {
    if (codigo.length === 47 || codigo.length === 48) {
        for(let i in codigo){
        
            if(!Number.isInteger(Number(codigo[i]))){
                throw new NumberDigitsException('invalid characters');
            }

        }
        return true
    } else {
        throw new NumberDigitsException('number of digits greater than 47 or 48');
    }


}
