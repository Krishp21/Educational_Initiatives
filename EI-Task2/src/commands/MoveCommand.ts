import { ICommand } from './ICommand';
import { Rover } from '../rover/Rover';


export class MoveCommand implements ICommand {
    private rover: Rover;

    constructor(rover: Rover) {
        this.rover = rover;
    }

    execute(): void {
        this.rover.move();
    }
}