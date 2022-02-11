
export class NumberDigitsException {
    message: String
    name: String
    constructor(message: String) {
        this.message = message;
        this.name = "NumberDigitsException";
    }
}