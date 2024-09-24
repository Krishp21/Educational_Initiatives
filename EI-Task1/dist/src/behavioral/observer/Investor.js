"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investor = void 0;
const Logger_1 = require("../../utils/Logger");
class Investor {
    constructor(name) {
        this.name = name;
        this.logger = Logger_1.Logger.getInstance();
    }
    getName() {
        return this.name;
    }
    update(stockName, price) {
        this.logger.log(`${this.name} notified: ${stockName} price is now ${price}.`, Logger_1.LogLevel.INFO);
    }
}
exports.Investor = Investor;
