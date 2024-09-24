export interface EventListener {
    handleEvent(eventType: string, data: any): void;
}
