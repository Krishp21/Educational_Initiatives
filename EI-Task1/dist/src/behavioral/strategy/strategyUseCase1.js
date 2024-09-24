"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
exports.strategyUseCase1 = strategyUseCase1;
const CreditCardPayment_1 = require("./CreditCardPayment");
const PayPalPayment_1 = require("./PayPalPayment");
const Logger_1 = require("../../utils/Logger");
const ExceptionHandler_1 = require("../../utils/ExceptionHandler");
class ShoppingCart {
    constructor() {
        this.items = [];
        this.logger = Logger_1.Logger.getInstance();
        this.exceptionHandler = new ExceptionHandler_1.ExceptionHandler();
    }
    addItem(item) {
        this.items.push(item);
        this.logger.log(`Added item: ${item}`, Logger_1.LogLevel.INFO);
    }
    pay(amount, strategy) {
        try {
            this.logger.log(`Initiating payment of $${amount}.`, Logger_1.LogLevel.INFO);
            strategy.pay(amount);
            this.logger.log(`Payment of $${amount} completed successfully.`, Logger_1.LogLevel.INFO);
        }
        catch (error) {
            this.exceptionHandler.handleError(error);
        }
    }
}
exports.ShoppingCart = ShoppingCart;
function strategyUseCase1() {
    const cart = new ShoppingCart();
    cart.addItem('Book');
    cart.addItem('Pen');
    const creditCardPayment = new CreditCardPayment_1.CreditCardPayment('1234-5678-9012-3456', '123');
    cart.pay(100, creditCardPayment);
    const payPalPayment = new PayPalPayment_1.PayPalPayment('user@example.com', 'securepassword');
    cart.pay(200, payPalPayment);
}
