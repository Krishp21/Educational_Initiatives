import { Notification } from './Notification';

export abstract class NotificationDecorator implements Notification {
    protected notification: Notification;

    constructor(notification: Notification) {
        this.notification = notification;
    }

    public abstract send(message: string): void;
}
