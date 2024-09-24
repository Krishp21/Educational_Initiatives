import { PaymentGateway } from './PaymentGateway';
import { StripeGateway } from './StripeGateway';
import { PayPalGateway } from './PayPalGateway';

export class PaymentGatewayAdapter implements PaymentGateway {
    private gateway: PaymentGateway;

    constructor(gatewayType: string) {
        if (gatewayType === 'stripe') {
            this.gateway = new StripeGateway();
        } else if (gatewayType === 'paypal') {
            this.gateway = new PayPalGateway();
        } else {
            throw new Error('Unsupported payment gateway.');
        }
    }

    public initiatePayment(amount: number): void {
        this.gateway.initiatePayment(amount);
    }
}
