import { LoggerFactory } from './LoggerFactory';
import { LoggerInterface } from './LoggerInterface';

export function factoryUseCase1(): void {
    const consoleLogger: LoggerInterface = LoggerFactory.createLogger('console');
    consoleLogger.log('This is a console log message.');

    const fileLogger: LoggerInterface = LoggerFactory.createLogger('file');
    fileLogger.log('This is a file log message.');
}
