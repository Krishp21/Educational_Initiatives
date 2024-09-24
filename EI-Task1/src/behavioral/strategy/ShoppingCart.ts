
import { PaymentStrategy } from './PaymentStrategy';
import { Logger, LogLevel } from '../../utils/Logger';
import { ExceptionHandler } from '../../utils/ExceptionHandler';

export class ShoppingCart {
    private items: string[] = [];
    private logger: Logger;
    private exceptionHandler: ExceptionHandler;

    constructor() {
        this.logger = Logger.getInstance();
        this.exceptionHandler = new ExceptionHandler();
    }

    public addItem(item: string): void {
        this.items.push(item);
        this.logger.log(`Added item: ${item}`, LogLevel.INFO);
    }

    public pay(strategy: PaymentStrategy, amount: number): void { // Method expects (strategy, amount)
        try {
            this.logger.log(`Initiating payment of $${amount}.`, LogLevel.INFO);
            strategy.pay(amount);
            this.logger.log(`Payment of $${amount} completed successfully.`, LogLevel.INFO);
        } catch (error) {
            this.exceptionHandler.handleError(error as Error);
        }
    }
}
