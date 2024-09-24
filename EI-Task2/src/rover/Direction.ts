/**
 * Direction enum represents the four cardinal directions.
 */
export enum Direction {
    North = 'N',
    East = 'E',
    South = 'S',
    West = 'W'
}

/**
 * Utility class for direction-related operations.
 */
export class DirectionUtils {
    private static directions = [Direction.North, Direction.East, Direction.South, Direction.West];

    /**
     * Returns the new direction after turning left.
     * @param current Current direction.
     * @returns New direction.
     */
    static turnLeft(current: Direction): Direction {
        const idx = this.directions.indexOf(current);
        return this.directions[(idx + 3) % 4];
    }

    /**
     * Returns the new direction after turning right.
     * @param current Current direction.
     * @returns New direction.
     */
    static turnRight(current: Direction): Direction {
        const idx = this.directions.indexOf(current);
        return this.directions[(idx + 1) % 4];
    }
}
