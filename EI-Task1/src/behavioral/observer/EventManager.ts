import { EventListener } from './EventListener';
import { Logger, LogLevel } from '../../utils/Logger';

export class EventManager {
    private listeners: Map<string, EventListener[]> = new Map();
    private logger: Logger;

    constructor() {
        this.logger = Logger.getInstance();
    }

    public subscribe(eventType: string, listener: EventListener): void {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, []);
        }
        this.listeners.get(eventType)!.push(listener);
        this.logger.log(`Listener subscribed to event: ${eventType}`, LogLevel.INFO);
    }

    public unsubscribe(eventType: string, listener: EventListener): void {
        if (this.listeners.has(eventType)) {
            const updatedListeners = this.listeners.get(eventType)!.filter(l => l !== listener);
            this.listeners.set(eventType, updatedListeners);
            this.logger.log(`Listener unsubscribed from event: ${eventType}`, LogLevel.INFO);
        }
    }

    public emit(eventType: string, data: any): void {
        this.logger.log(`Emitting event: ${eventType}`, LogLevel.INFO);
        const eventListeners = this.listeners.get(eventType);
        if (eventListeners) {
            eventListeners.forEach(listener => listener.handleEvent(eventType, data));
        }
    }
}
