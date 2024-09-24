import { LoggerInterface } from './LoggerInterface';
import fs from 'fs';
import path from 'path';

export class FileLogger implements LoggerInterface {
    private logFile: string;

    constructor() {
        this.logFile = path.join(__dirname, '../../logs/factory.log');
        fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
    }

    public log(message: string): void {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        fs.appendFile(this.logFile, logMessage, (err) => {
            if (err) {
                console.error('Failed to write to log file:', err);
            }
        });
    }
}
