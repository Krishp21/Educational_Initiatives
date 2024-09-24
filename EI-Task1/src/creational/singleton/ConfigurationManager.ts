export class ConfigurationManager {
    private static instance: ConfigurationManager;
    private settings: Map<string, any>;

    private constructor() {
        this.settings = new Map();
    }

    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    public set(key: string, value: any): void {
        this.settings.set(key, value);
    }

    public get(key: string): any {
        return this.settings.get(key);
    }
}
