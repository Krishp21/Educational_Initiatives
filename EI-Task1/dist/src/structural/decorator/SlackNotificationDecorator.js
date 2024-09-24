"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackNotificationDecorator = void 0;
const NotificationDecorator_1 = require("./NotificationDecorator");
class SlackNotificationDecorator extends NotificationDecorator_1.NotificationDecorator {
    send(message) {
        this.notification.send(message);
        this.sendSlackNotification(message);
    }
    sendSlackNotification(message) {
        console.log(`Slack Notification: ${message}`);
    }
}
exports.SlackNotificationDecorator = SlackNotificationDecorator;
