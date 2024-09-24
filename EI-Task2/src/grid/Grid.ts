import { IGridComponent } from './IGridComponent';
import { Obstacle } from './Obstacle';

export class Grid implements IGridComponent {
    private width: number;
    private height: number;
    private obstacles: Obstacle[];

    constructor(width: number, height: number, obstacles: Obstacle[] = []) {
        this.width = width;
        this.height = height;
        this.obstacles = obstacles;
    }

    /**
     * Adds an obstacle to the grid.
     * @param obstacle Obstacle to add.
     */
    addObstacle(obstacle: Obstacle): void {
        this.obstacles.push(obstacle);
    }

    /**
     * Checks if the specified position has an obstacle.
     * @param x X-coordinate.
     * @param y Y-coordinate.
     * @returns Boolean indicating presence of obstacle.
     */
    isObstacle(x: number, y: number): boolean {
        return this.obstacles.some(obstacle => obstacle.isAtPosition(x, y));
    }

    /**
     * Checks if the position is within grid boundaries.
     * @param x X-coordinate.
     * @param y Y-coordinate.
     * @returns Boolean indicating if position is within bounds.
     */
    isWithinBounds(x: number, y: number): boolean {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
}
