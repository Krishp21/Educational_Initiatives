import { Logger, LogLevel } from '../../utils/Logger';

export class Investor {
    private logger: Logger;

    constructor(private name: string) {
        this.logger = Logger.getInstance();
    }

    public getName(): string {
        return this.name;
    }

    public update(stockName: string, price: number): void {
        this.logger.log(`${this.name} notified: ${stockName} price is now ${price}.`, LogLevel.INFO);
    }
}
