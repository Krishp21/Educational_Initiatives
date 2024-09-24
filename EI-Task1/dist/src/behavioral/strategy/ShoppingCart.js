"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
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
    pay(strategy, amount) {
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
