import { EventManager } from './EventManager';
import { EventListener } from './EventListener';

class UserNotification implements EventListener {
    handleEvent(eventType: string, data: any): void {
        console.log(`UserNotification received event '${eventType}' with data:`, data);
    }
}

class AdminAlert implements EventListener {
    handleEvent(eventType: string, data: any): void {
        console.log(`AdminAlert received event '${eventType}' with data:`, data);
    }
}

export function observerUseCase2(): void {
    const eventManager = new EventManager();

    const userNotification = new UserNotification();
    const adminAlert = new AdminAlert();

    eventManager.subscribe('USER_SIGNUP', userNotification);
    eventManager.subscribe('USER_SIGNUP', adminAlert);
    eventManager.subscribe('ORDER_PLACED', adminAlert);

    eventManager.emit('USER_SIGNUP', { username: 'Charlie' });
    eventManager.emit('ORDER_PLACED', { orderId: 12345 });
}
