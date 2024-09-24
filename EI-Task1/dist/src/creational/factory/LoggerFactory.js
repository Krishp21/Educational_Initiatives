"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = void 0;
const ConsoleLogger_1 = require("./ConsoleLogger");
const FileLogger_1 = require("./FileLogger");
class LoggerFactory {
    static createLogger(type) {
        switch (type) {
            case 'console':
                return new ConsoleLogger_1.Logger();
            case 'file':
                return new FileLogger_1.FileLogger();
            default:
                throw new Error('Invalid logger type.');
        }
    }
}
exports.LoggerFactory = LoggerFactory;
