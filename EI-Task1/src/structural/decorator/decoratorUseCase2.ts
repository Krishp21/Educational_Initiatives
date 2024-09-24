import { BasicNotification } from './BasicNotification';
import { SlackNotificationDecorator } from './SlackNotificationDecorator';
import { SMSNotificationDecorator } from './SMSNotificationDecorator';

export function decoratorUseCase2(): void {
    let notification = new BasicNotification();
    notification.send('You have a new message.');

    notification = new SlackNotificationDecorator(notification);
    notification.send('You have a new message.');

    notification = new SMSNotificationDecorator(notification);
    notification.send('You have a new message.');
}
