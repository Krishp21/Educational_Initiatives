"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalGateway = void 0;
class PayPalGateway {
    initiatePayment(amount) {
        console.log(`PayPal: Sending payment of $${amount}.`);
    }
}
exports.PayPalGateway = PayPalGateway;
