import { NotificationInterface } from './NotificationInterface';
import { EmailNotification } from './EmailNotification';
import { SMSNotification } from './SMSNotification';

export class NotificationFactory {
    public static createNotification(type: string): NotificationInterface {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            default:
                throw new Error('Invalid notification type.');
        }
    }
}
