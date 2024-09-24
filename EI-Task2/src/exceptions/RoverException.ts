export class RoverException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'RoverException';
    }
}
