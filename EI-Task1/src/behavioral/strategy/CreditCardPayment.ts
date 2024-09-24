import { PaymentStrategy } from './PaymentStrategy';
import { Logger, LogLevel } from '../../utils/Logger';

export class CreditCardPayment implements PaymentStrategy {
    private logger: Logger;

    constructor(private cardNumber: string, private cvv: string) {
        this.logger = Logger.getInstance();
    }

    public pay(amount: number): void {
        // Validate card details
        if (!this.cardNumber || !this.cvv) {
            throw new Error('Invalid credit card details.');
        }
        // Process payment
        this.logger.log(`Processing credit card payment of $${amount}.`, LogLevel.INFO);
        // Simulate payment processing
    }
}
