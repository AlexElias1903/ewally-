
export class DvException {
    message: String
    name: String
    constructor(message: String) {
        this.message = message;
        this.name = "DvException";
    }
}