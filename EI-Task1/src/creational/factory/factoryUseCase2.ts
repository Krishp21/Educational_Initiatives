import { NotificationFactory } from './NotificationFactory';
import { NotificationInterface } from './NotificationInterface';

export function factoryUseCase2(): void {
    const emailNotification: NotificationInterface = NotificationFactory.createNotification('email');
    emailNotification.send('Welcome to our platform!');

    const smsNotification: NotificationInterface = NotificationFactory.createNotification('sms');
    smsNotification.send('Your verification code is 123456.');
}
