"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryUseCase1 = factoryUseCase1;
const LoggerFactory_1 = require("./LoggerFactory");
function factoryUseCase1() {
    const consoleLogger = LoggerFactory_1.LoggerFactory.createLogger('console');
    consoleLogger.log('This is a console log message.');
    const fileLogger = LoggerFactory_1.LoggerFactory.createLogger('file');
    fileLogger.log('This is a file log message.');
}
