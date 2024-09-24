import { Logger, LogLevel } from '../../utils/Logger';

export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private logger: Logger;

    private constructor() {
        this.logger = Logger.getInstance();
        this.logger.log('Database connection established.', LogLevel.INFO);
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public query(sql: string): void {
        this.logger.log(`Executing query: ${sql}`, LogLevel.INFO);
        // Simulate query execution
    }
}
