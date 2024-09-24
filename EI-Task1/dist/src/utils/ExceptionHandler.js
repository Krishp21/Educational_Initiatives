"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandler = void 0;
const Logger_1 = require("./Logger");
class ExceptionHandler {
    constructor() {
        this.logger = Logger_1.Logger.getInstance();
    }
    handleError(error) {
        this.logger.log(`Error: ${error.message}`, Logger_1.LogLevel.ERROR);
    }
}
exports.ExceptionHandler = ExceptionHandler;
