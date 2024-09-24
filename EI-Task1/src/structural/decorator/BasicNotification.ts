import { Notification } from './Notification'; 
export class BasicNotification implements Notification {
    public send(message: string): void {
        console.log(`Basic Notification: ${message}`);
    }
}
