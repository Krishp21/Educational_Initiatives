import { Logger, LogLevel } from './Logger';

export class ExceptionHandler {
    private logger: Logger;

    constructor() {
        this.logger = Logger.getInstance();
    }

    public handleError(error: Error): void {
        this.logger.log(`Error: ${error.message}`, LogLevel.ERROR);
    }
}
