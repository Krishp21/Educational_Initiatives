"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observerUseCase1 = observerUseCase1;
const Stock_1 = require("./Stock");
const Investor_1 = require("./Investor");
function observerUseCase1() {
    const stock = new Stock_1.Stock('AAPL', 150);
    const investor1 = new Investor_1.Investor('Alice');
    const investor2 = new Investor_1.Investor('Bob');
    stock.addInvestor(investor1);
    stock.addInvestor(investor2);
    stock.setPrice(155);
    stock.setPrice(160);
}
