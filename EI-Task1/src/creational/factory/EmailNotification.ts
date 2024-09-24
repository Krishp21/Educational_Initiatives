import { NotificationInterface } from './NotificationInterface';

export class EmailNotification implements NotificationInterface {
    public send(message: string): void {
        console.log(`Sending Email with message: ${message}`);
    }
}
