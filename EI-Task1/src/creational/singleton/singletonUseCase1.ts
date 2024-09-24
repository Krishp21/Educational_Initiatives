import { ConfigurationManager } from './ConfigurationManager';

export function singletonUseCase1(): void {
    const config1 = ConfigurationManager.getInstance();
    config1.set('apiUrl', 'https://api.example.com');
    config1.set('retryAttempts', 3);

    const config2 = ConfigurationManager.getInstance();
    console.log('API URL:', config2.get('apiUrl')); // Output: https://api.example.com
    console.log('Retry Attempts:', config2.get('retryAttempts')); // Output: 3
}
