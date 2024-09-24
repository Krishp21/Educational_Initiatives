"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterUseCase1 = adapterUseCase1;
const PaymentGatewayAdapter_1 = require("./PaymentGatewayAdapter");
function adapterUseCase1() {
    const stripeAdapter = new PaymentGatewayAdapter_1.PaymentGatewayAdapter('stripe');
    stripeAdapter.initiatePayment(250);
    const payPalAdapter = new PaymentGatewayAdapter_1.PaymentGatewayAdapter('paypal');
    payPalAdapter.initiatePayment(450);
}
