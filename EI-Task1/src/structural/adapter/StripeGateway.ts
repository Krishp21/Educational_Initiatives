import { PaymentGateway } from './PaymentGateway';

export class StripeGateway implements PaymentGateway {
    public initiatePayment(amount: number): void {
        console.log(`Stripe: Processing payment of $${amount}.`);
    }
}
