"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
const Logger_1 = require("../../utils/Logger");
class PayPalPayment {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.logger = Logger_1.Logger.getInstance();
    }
    pay(amount) {
        // Validate PayPal account
        if (!this.email || !this.password) {
            throw new Error('Invalid PayPal account details.');
        }
        // Process payment
        this.logger.log(`Processing PayPal payment of $${amount}.`, Logger_1.LogLevel.INFO);
    }
}
exports.PayPalPayment = PayPalPayment;
