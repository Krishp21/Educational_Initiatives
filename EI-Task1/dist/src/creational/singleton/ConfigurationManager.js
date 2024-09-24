"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationManager = void 0;
class ConfigurationManager {
    constructor() {
        this.settings = new Map();
    }
    static getInstance() {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }
    set(key, value) {
        this.settings.set(key, value);
    }
    get(key) {
        return this.settings.get(key);
    }
}
exports.ConfigurationManager = ConfigurationManager;
