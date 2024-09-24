"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoratorUseCase2 = decoratorUseCase2;
const BasicNotification_1 = require("./BasicNotification");
const SlackNotificationDecorator_1 = require("./SlackNotificationDecorator");
const SMSNotificationDecorator_1 = require("./SMSNotificationDecorator");
function decoratorUseCase2() {
    let notification = new BasicNotification_1.BasicNotification();
    notification.send('You have a new message.');
    notification = new SlackNotificationDecorator_1.SlackNotificationDecorator(notification);
    notification.send('You have a new message.');
    notification = new SMSNotificationDecorator_1.SMSNotificationDecorator(notification);
    notification.send('You have a new message.');
}
