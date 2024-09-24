import { DatabaseConnection } from './DatabaseConnection';

export function singletonUseCase2(): void {
    const db1 = DatabaseConnection.getInstance();
    db1.query('SELECT * FROM users');

    const db2 = DatabaseConnection.getInstance();
    db2.query('SELECT * FROM orders');

    console.log('Are both DB instances the same?', db1 === db2); // Output: true
}
