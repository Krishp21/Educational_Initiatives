import { NotificationInterface } from './NotificationInterface';

export class SMSNotification implements NotificationInterface {
    public send(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }
}
