"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayAdapter = void 0;
const StripeGateway_1 = require("./StripeGateway");
const PayPalGateway_1 = require("./PayPalGateway");
class PaymentGatewayAdapter {
    constructor(gatewayType) {
        if (gatewayType === 'stripe') {
            this.gateway = new StripeGateway_1.StripeGateway();
        }
        else if (gatewayType === 'paypal') {
            this.gateway = new PayPalGateway_1.PayPalGateway();
        }
        else {
            throw new Error('Unsupported payment gateway.');
        }
    }
    initiatePayment(amount) {
        this.gateway.initiatePayment(amount);
    }
}
exports.PaymentGatewayAdapter = PaymentGatewayAdapter;
