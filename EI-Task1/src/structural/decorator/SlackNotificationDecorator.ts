import { NotificationDecorator } from './NotificationDecorator';

export class SlackNotificationDecorator extends NotificationDecorator {
    public send(message: string): void {
        this.notification.send(message);
        this.sendSlackNotification(message);
    }

    private sendSlackNotification(message: string): void {
        console.log(`Slack Notification: ${message}`);
    }
}
