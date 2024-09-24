import { PaymentStrategy } from './PaymentStrategy';
import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PayPalPayment';
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

    public pay(amount: number, strategy: PaymentStrategy): void { // Changed order
        try {
            this.logger.log(`Initiating payment of $${amount}.`, LogLevel.INFO);
            strategy.pay(amount);
            this.logger.log(`Payment of $${amount} completed successfully.`, LogLevel.INFO);
        } catch (error) {
            this.exceptionHandler.handleError(error as Error);
        }
    }
}

export function strategyUseCase1(): void {
    const cart = new ShoppingCart();
    cart.addItem('Book');
    cart.addItem('Pen');

    const creditCardPayment = new CreditCardPayment('1234-5678-9012-3456', '123');
    cart.pay(100, creditCardPayment);

    const payPalPayment = new PayPalPayment('user@example.com', 'securepassword');
    cart.pay(200, payPalPayment);
}
