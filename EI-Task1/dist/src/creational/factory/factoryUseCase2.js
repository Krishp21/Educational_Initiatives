"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryUseCase2 = factoryUseCase2;
const NotificationFactory_1 = require("./NotificationFactory");
function factoryUseCase2() {
    const emailNotification = NotificationFactory_1.NotificationFactory.createNotification('email');
    emailNotification.send('Welcome to our platform!');
    const smsNotification = NotificationFactory_1.NotificationFactory.createNotification('sms');
    smsNotification.send('Your verification code is 123456.');
}
