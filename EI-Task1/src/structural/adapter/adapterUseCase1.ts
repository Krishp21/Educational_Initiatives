import { PaymentGatewayAdapter } from './PaymentGatewayAdapter';

export function adapterUseCase1(): void {
    const stripeAdapter = new PaymentGatewayAdapter('stripe');
    stripeAdapter.initiatePayment(250);

    const payPalAdapter = new PaymentGatewayAdapter('paypal');
    payPalAdapter.initiatePayment(450);
}
