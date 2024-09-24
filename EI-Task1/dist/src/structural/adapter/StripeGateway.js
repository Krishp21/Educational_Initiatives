"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeGateway = void 0;
class StripeGateway {
    initiatePayment(amount) {
        console.log(`Stripe: Processing payment of $${amount}.`);
    }
}
exports.StripeGateway = StripeGateway;
