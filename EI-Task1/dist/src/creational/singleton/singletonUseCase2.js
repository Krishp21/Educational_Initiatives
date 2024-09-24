"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singletonUseCase2 = singletonUseCase2;
const DatabaseConnection_1 = require("./DatabaseConnection");
function singletonUseCase2() {
    const db1 = DatabaseConnection_1.DatabaseConnection.getInstance();
    db1.query('SELECT * FROM users');
    const db2 = DatabaseConnection_1.DatabaseConnection.getInstance();
    db2.query('SELECT * FROM orders');
    console.log('Are both DB instances the same?', db1 === db2); // Output: true
}
