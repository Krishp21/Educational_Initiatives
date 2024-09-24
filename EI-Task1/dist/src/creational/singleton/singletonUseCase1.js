"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singletonUseCase1 = singletonUseCase1;
const ConfigurationManager_1 = require("./ConfigurationManager");
function singletonUseCase1() {
    const config1 = ConfigurationManager_1.ConfigurationManager.getInstance();
    config1.set('apiUrl', 'https://api.example.com');
    config1.set('retryAttempts', 3);
    const config2 = ConfigurationManager_1.ConfigurationManager.getInstance();
    console.log('API URL:', config2.get('apiUrl')); // Output: https://api.example.com
    console.log('Retry Attempts:', config2.get('retryAttempts')); // Output: 3
}
