"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
const Logger_1 = require("../../utils/Logger");
class CreditCardPayment {
    constructor(cardNumber, cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.logger = Logger_1.Logger.getInstance();
    }
    pay(amount) {
        // Validate card details
        if (!this.cardNumber || !this.cvv) {
            throw new Error('Invalid credit card details.');
        }
        // Process payment
        this.logger.log(`Processing credit card payment of $${amount}.`, Logger_1.LogLevel.INFO);
        // Simulate payment processing
    }
}
exports.CreditCardPayment = CreditCardPayment;
