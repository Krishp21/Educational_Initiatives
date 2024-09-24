
/**
 * Position class represents the (x, y) coordinates on the grid.
 */
export class Position {
    constructor(public x: number, public y: number) {}

    /**
     * Moves the position one step in the specified direction.
     * @param direction Direction to move.
     */
    move(direction: string): void {
        switch (direction) {
            case 'N':
                this.y += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'W':
                this.x -= 1;
                break;
        }
    }
}
