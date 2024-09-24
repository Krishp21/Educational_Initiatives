"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLogger = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class FileLogger {
    constructor() {
        this.logFile = path_1.default.join(__dirname, '../../logs/factory.log');
        fs_1.default.mkdirSync(path_1.default.dirname(this.logFile), { recursive: true });
    }
    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        fs_1.default.appendFile(this.logFile, logMessage, (err) => {
            if (err) {
                console.error('Failed to write to log file:', err);
            }
        });
    }
}
exports.FileLogger = FileLogger;
