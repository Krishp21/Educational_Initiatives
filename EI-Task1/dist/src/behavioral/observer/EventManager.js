"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
const Logger_1 = require("../../utils/Logger");
class EventManager {
    constructor() {
        this.listeners = new Map();
        this.logger = Logger_1.Logger.getInstance();
    }
    subscribe(eventType, listener) {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, []);
        }
        this.listeners.get(eventType).push(listener);
        this.logger.log(`Listener subscribed to event: ${eventType}`, Logger_1.LogLevel.INFO);
    }
    unsubscribe(eventType, listener) {
        if (this.listeners.has(eventType)) {
            const updatedListeners = this.listeners.get(eventType).filter(l => l !== listener);
            this.listeners.set(eventType, updatedListeners);
            this.logger.log(`Listener unsubscribed from event: ${eventType}`, Logger_1.LogLevel.INFO);
        }
    }
    emit(eventType, data) {
        this.logger.log(`Emitting event: ${eventType}`, Logger_1.LogLevel.INFO);
        const eventListeners = this.listeners.get(eventType);
        if (eventListeners) {
            eventListeners.forEach(listener => listener.handleEvent(eventType, data));
        }
    }
}
exports.EventManager = EventManager;
