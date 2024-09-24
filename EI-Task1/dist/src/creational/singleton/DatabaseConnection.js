"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const Logger_1 = require("../../utils/Logger");
class DatabaseConnection {
    constructor() {
        this.logger = Logger_1.Logger.getInstance();
        this.logger.log('Database connection established.', Logger_1.LogLevel.INFO);
    }
    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
    query(sql) {
        this.logger.log(`Executing query: ${sql}`, Logger_1.LogLevel.INFO);
        // Simulate query execution
    }
}
exports.DatabaseConnection = DatabaseConnection;
