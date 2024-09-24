// src/utils/Logger.ts

/**
 * Logger class provides logging functionalities.
 */
export class Logger {
    private static instance: Logger;

    private constructor() {
        // Private constructor to prevent instantiation
    }

    /**
     * Gets the singleton instance of Logger.
     * @returns Logger instance.
     */
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    /**
     * Logs an info message.
     * @param message Message to log.
     */
    public info(message: string): void {
        console.log(`[INFO]: ${message}`);
    }

    /**
     * Logs a warning message.
     * @param message Message to log.
     */
    public warn(message: string): void {
        console.warn(`[WARN]: ${message}`);
    }

    /**
     * Logs an error message.
     * @param message Message to log.
     */
    public error(message: string): void {
        console.error(`[ERROR]: ${message}`);
    }
}
