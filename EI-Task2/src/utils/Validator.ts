// src/utils/Validator.ts

import { Grid } from '../grid/Grid';
import { RoverException } from '../exceptions/RoverException';

/**
 * Validator class provides methods to validate inputs and states.
 */
export class Validator {
    /**
     * Validates the initial position of the rover.
     * @param x X-coordinate.
     * @param y Y-coordinate.
     * @param grid Grid instance.
     */
    static validatePosition(x: number, y: number, grid: Grid): void {
        if (!grid.isWithinBounds(x, y)) {
            throw new RoverException(`Initial position (${x}, ${y}) is out of grid bounds.`);
        }
        if (grid.isObstacle(x, y)) {
            throw new RoverException(`Initial position (${x}, ${y}) has an obstacle.`);
        }
    }

    /**
     * Validates a list of commands.
     * @param commands Array of command strings.
     */
    static validateCommands(commands: string[]): void {
        const validCommands = ['M', 'L', 'R'];
        for (const cmd of commands) {
            if (!validCommands.includes(cmd)) {
                throw new RoverException(`Invalid command: ${cmd}`);
            }
        }
    }
}
