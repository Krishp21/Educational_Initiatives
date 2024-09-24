import { NotificationDecorator } from './NotificationDecorator';

export class SMSNotificationDecorator extends NotificationDecorator {
    public send(message: string): void {
        this.notification.send(message);
        this.sendSMSNotification(message);
    }

    private sendSMSNotification(message: string): void {
        console.log(`SMS Notification: ${message}`);
    }
}
