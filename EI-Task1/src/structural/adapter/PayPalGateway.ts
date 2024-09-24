import { PaymentGateway } from './PaymentGateway';

export class PayPalGateway implements PaymentGateway {
    public initiatePayment(amount: number): void {
        console.log(`PayPal: Sending payment of $${amount}.`);
    }
}
