import { PaymentStrategy } from './PaymentStrategy';
import { Logger, LogLevel } from '../../utils/Logger';

export class PayPalPayment implements PaymentStrategy {
    private logger: Logger;

    constructor(private email: string, private password: string) {
        this.logger = Logger.getInstance();
    }

    public pay(amount: number): void {
        // Validate PayPal account
        if (!this.email || !this.password) {
            throw new Error('Invalid PayPal account details.');
        }
        // Process payment
        this.logger.log(`Processing PayPal payment of $${amount}.`, LogLevel.INFO);
    }
}
