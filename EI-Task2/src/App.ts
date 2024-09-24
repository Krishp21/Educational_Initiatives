
import { Grid } from './grid/Grid';
import { Obstacle } from './grid/Obstacle';
import { Rover } from './rover/Rover';
import { Direction } from './rover/Direction';
import { ICommand } from './commands/ICommand';
import { MoveCommand } from './commands/MoveCommand';
import { TurnLeftCommand } from './commands/TurnLeftCommand';
import { TurnRightCommand } from './commands/TurnRightCommand';
import { Validator } from './utils/Validator';
import { Logger } from './utils/Logger';
import { RoverException } from './exceptions/RoverException';

/**
 * App class orchestrates the Mars Rover simulation.
 */
export class App {
    private grid: Grid;
    private rover: Rover;
    private logger: Logger;

    constructor(width: number, height: number, obstacles: Obstacle[], startX: number, startY: number, startDirection: Direction) {
        this.logger = Logger.getInstance();
        this.grid = new Grid(width, height, obstacles);
        this.rover = new Rover(startX, startY, startDirection, this.grid);
    }

    /**
     * Processes a list of commands.
     * @param commands Array of command strings.
     */
    processCommands(commands: string[]): void {
        Validator.validateCommands(commands);
        for (const cmd of commands) {
            try {
                const command: ICommand = this.getCommand(cmd);
                command.execute();
            } catch (error) {
                if (error instanceof RoverException) {
                    this.logger.error(error.message);
                } else {
                    this.logger.error('An unexpected error occurred.');
                }
            }
        }
    }

    /**
     * Maps a command string to its corresponding ICommand implementation.
     * @param cmd Command string.
     * @returns ICommand instance.
     */
    private getCommand(cmd: string): ICommand {
        const commandMap: { [key: string]: ICommand } = {
            'M': new MoveCommand(this.rover),
            'L': new TurnLeftCommand(this.rover),
            'R': new TurnRightCommand(this.rover)
        };
        return commandMap[cmd];
    }

    /**
     * Outputs the final status of the rover.
     */
    getFinalStatus(): void {
        const status = this.rover.getStatus();
        console.log(status.getReport());
    }
}
