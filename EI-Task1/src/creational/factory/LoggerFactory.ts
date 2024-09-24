import { Logger as ConsoleLogger } from './ConsoleLogger';
import { FileLogger } from './FileLogger';
import { LoggerInterface } from './LoggerInterface';

export class LoggerFactory {
    public static createLogger(type: string): LoggerInterface {
        switch (type) {
            case 'console':
                return new ConsoleLogger();
            case 'file':
                return new FileLogger();
            default:
                throw new Error('Invalid logger type.');
        }
    }
}
