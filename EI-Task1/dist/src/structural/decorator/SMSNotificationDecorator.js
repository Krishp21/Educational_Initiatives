"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotificationDecorator = void 0;
const NotificationDecorator_1 = require("./NotificationDecorator");
class SMSNotificationDecorator extends NotificationDecorator_1.NotificationDecorator {
    send(message) {
        this.notification.send(message);
        this.sendSMSNotification(message);
    }
    sendSMSNotification(message) {
        console.log(`SMS Notification: ${message}`);
    }
}
exports.SMSNotificationDecorator = SMSNotificationDecorator;
