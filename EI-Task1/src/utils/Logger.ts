import fs from 'fs';
import path from 'path';

export enum LogLevel {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

export class Logger {
    private static instance: Logger;
    private logFile: string;

    private constructor() {
        this.logFile = path.join(__dirname, '../../logs/app.log');
        // Ensure log directory exists
        fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string, level: LogLevel = LogLevel.INFO): void {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level}] ${message}\n`;
        // Write to console
        console.log(logMessage.trim());
        // Append to log file
        fs.appendFile(this.logFile, logMessage, (err) => {
            if (err) {
                console.error('Failed to write to log file:', err);
            }
        });
    }
}
