"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = void 0;
const EmailNotification_1 = require("./EmailNotification");
const SMSNotification_1 = require("./SMSNotification");
class NotificationFactory {
    static createNotification(type) {
        switch (type) {
            case 'email':
                return new EmailNotification_1.EmailNotification();
            case 'sms':
                return new SMSNotification_1.SMSNotification();
            default:
                throw new Error('Invalid notification type.');
        }
    }
}
exports.NotificationFactory = NotificationFactory;
