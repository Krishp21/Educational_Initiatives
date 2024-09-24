"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observerUseCase2 = observerUseCase2;
const EventManager_1 = require("./EventManager");
class UserNotification {
    handleEvent(eventType, data) {
        console.log(`UserNotification received event '${eventType}' with data:`, data);
    }
}
class AdminAlert {
    handleEvent(eventType, data) {
        console.log(`AdminAlert received event '${eventType}' with data:`, data);
    }
}
function observerUseCase2() {
    const eventManager = new EventManager_1.EventManager();
    const userNotification = new UserNotification();
    const adminAlert = new AdminAlert();
    eventManager.subscribe('USER_SIGNUP', userNotification);
    eventManager.subscribe('USER_SIGNUP', adminAlert);
    eventManager.subscribe('ORDER_PLACED', adminAlert);
    eventManager.emit('USER_SIGNUP', { username: 'Charlie' });
    eventManager.emit('ORDER_PLACED', { orderId: 12345 });
}
