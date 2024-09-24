import { LoggerInterface } from './LoggerInterface';

export class Logger implements LoggerInterface {
    public log(message: string): void {
        console.log(`ConsoleLogger: ${message}`);
    }
}
