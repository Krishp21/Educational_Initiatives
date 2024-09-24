import { IGridComponent } from './IGridComponent';

/**
 * Obstacle class represents a single obstacle on the grid.
 */
export class Obstacle implements IGridComponent {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Checks if the obstacle is at the specified position.
     * @param x X-coordinate.
     * @param y Y-coordinate.
     * @returns Boolean indicating if obstacle is at the position.
     */
    isAtPosition(x: number, y: number): boolean {
        return this.x === x && this.y === y;
    }

    // Implementing IGridComponent interface method
    isObstacle(x: number, y: number): boolean {
        return this.isAtPosition(x, y);
    }
}
