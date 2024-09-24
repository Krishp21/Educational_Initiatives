import { Position } from './Position';
import { Direction } from './Direction';

/**
 * RoverStatus class encapsulates the current status of the rover.
 */
export class RoverStatus {
    constructor(public position: Position, public direction: Direction, public obstacleDetected: boolean) {}

    /**
     * Generates a status report string.
     * @returns Status report.
     */
    getReport(): string {
        const obstacleMsg = this.obstacleDetected ? 'Obstacle detected.' : 'No obstacles detected.';
        return `Rover is at (${this.position.x}, ${this.position.y}) facing ${this.direction}. ${obstacleMsg}`;
    }
}
