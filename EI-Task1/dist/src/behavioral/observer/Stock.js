"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const Logger_1 = require("../../utils/Logger");
class Stock {
    constructor(name, initialPrice) {
        this.name = name;
        this.investors = [];
        this.price = initialPrice;
        this.logger = Logger_1.Logger.getInstance();
    }
    addInvestor(investor) {
        this.investors.push(investor);
        this.logger.log(`${investor.getName()} has subscribed to ${this.name} stock.`, Logger_1.LogLevel.INFO);
    }
    removeInvestor(investor) {
        this.investors = this.investors.filter(inv => inv !== investor);
        this.logger.log(`${investor.getName()} has unsubscribed from ${this.name} stock.`, Logger_1.LogLevel.INFO);
    }
    setPrice(newPrice) {
        if (newPrice !== this.price) {
            this.price = newPrice;
            this.logger.log(`${this.name} stock price updated to ${this.price}.`, Logger_1.LogLevel.INFO);
            this.notifyInvestors();
        }
    }
    notifyInvestors() {
        this.logger.log(`Notifying investors about ${this.name} price change.`, Logger_1.LogLevel.INFO);
        this.investors.forEach(investor => investor.update(this.name, this.price));
    }
}
exports.Stock = Stock;
