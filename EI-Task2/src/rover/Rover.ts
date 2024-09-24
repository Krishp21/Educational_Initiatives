
import { Direction, DirectionUtils } from './Direction';
import { Position } from './Position';
import { Grid } from '../grid/Grid';
import { RoverStatus } from './RoverStatus';
import { RoverException } from '../exceptions/RoverException';
import { Logger } from '../utils/Logger';
import { Validator } from '../utils/Validator';

/**
 * Rover class represents the Mars Rover with position and direction.
 */
export class Rover {
    private position: Position;
    private direction: Direction;
    private grid: Grid;
    private logger: Logger;

    constructor(startX: number, startY: number, startDirection: Direction, grid: Grid) {
        Validator.validatePosition(startX, startY, grid);
        this.position = new Position(startX, startY);
        this.direction = startDirection;
        this.grid = grid;
        this.logger = Logger.getInstance();
        this.logger.info(`Rover initialized at (${startX}, ${startY}) facing ${startDirection}`);
    }

    /**
     * Moves the rover forward by one step in the current direction.
     */
    move(): void {
        const newPosition = new Position(this.position.x, this.position.y);
        newPosition.move(this.direction);

        // Validate new position
        if (!this.grid.isWithinBounds(newPosition.x, newPosition.y)) {
            this.logger.warn(`Move blocked. (${newPosition.x}, ${newPosition.y}) is out of bounds.`);
            throw new RoverException('Rover cannot move outside the grid boundaries.');
        }

        if (this.grid.isObstacle(newPosition.x, newPosition.y)) {
            this.logger.warn(`Move blocked by obstacle at (${newPosition.x}, ${newPosition.y}).`);
            throw new RoverException('Obstacle detected. Move aborted.');
        }

        // Update position
        this.position = newPosition;
        this.logger.info(`Rover moved to (${this.position.x}, ${this.position.y})`);
    }

    /**
     * Turns the rover left.
     */
    turnLeft(): void {
        this.direction = DirectionUtils.turnLeft(this.direction);
        this.logger.info(`Rover turned left. Now facing ${this.direction}`);
    }

    /**
     * Turns the rover right.
     */
    turnRight(): void {
        this.direction = DirectionUtils.turnRight(this.direction);
        this.logger.info(`Rover turned right. Now facing ${this.direction}`);
    }

    /**
     * Generates the rover's current status report.
     * @returns RoverStatus
     */
    getStatus(): RoverStatus {
        return new RoverStatus(this.position, this.direction, false);
    }

    /**
     * Gets the current position.
     * @returns Position
     */
    getPosition(): Position {
        return this.position;
    }

    /**
     * Gets the current direction.
     * @returns Direction
     */
    getDirection(): Direction {
        return this.direction;
    }
}
