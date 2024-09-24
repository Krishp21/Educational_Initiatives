
import { App } from './App';
import { Obstacle } from './grid/Obstacle';
import { Direction } from './rover/Direction';
import * as readline from 'readline';

/**
 * Initializes and runs the Mars Rover simulation.
 */
const runSimulation = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askQuestion = (query: string): Promise<string> => {
        return new Promise(resolve => rl.question(query, resolve));
    };

    try {
        // Get Grid Size
        let width: number, height: number;
        while (true) {
            const gridSizeInput = await askQuestion('Enter grid size (width height) e.g., "10 10": ');
            const [widthStr, heightStr] = gridSizeInput.trim().split(' ');
            width = parseInt(widthStr, 10);
            height = parseInt(heightStr, 10);

            if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
                console.error('Invalid grid size. Please enter two positive integers separated by a space.');
            } else {
                break;
            }
        }

        // Get Number of Obstacles
        let numObstacles: number;
        while (true) {
            const numObstaclesInput = await askQuestion('Enter number of obstacles: ');
            numObstacles = parseInt(numObstaclesInput.trim(), 10);

            if (isNaN(numObstacles) || numObstacles < 0) {
                console.error('Invalid number of obstacles. Please enter a non-negative integer.');
            } else {
                break;
            }
        }

        // Get Obstacles Positions
        const obstacles: Obstacle[] = [];
        for (let i = 0; i < numObstacles; i++) {
            while (true) {
                const obstacleInput = await askQuestion(`Enter obstacle ${i + 1} position (x y): `);
                const [xStr, yStr] = obstacleInput.trim().split(' ');
                const x = parseInt(xStr, 10);
                const y = parseInt(yStr, 10);

                if (isNaN(x) || isNaN(y)) {
                    console.error(`Invalid coordinates for obstacle ${i + 1}. Please enter two integers separated by a space.`);
                } else if (x < 0 || x >= width || y < 0 || y >= height) {
                    console.error(`Obstacle ${i + 1} position (${x}, ${y}) is out of grid bounds.`);
                } else {
                    // Check for duplicate obstacles
                    if (obstacles.some(ob => ob.isAtPosition(x, y))) {
                        console.error(`Obstacle ${i + 1} position (${x}, ${y}) is already occupied by another obstacle.`);
                    } else {
                        obstacles.push(new Obstacle(x, y));
                        break;
                    }
                }
            }
        }

        // Get Starting Position
        let startX: number, startY: number, direction: Direction;
        while (true) {
            const startPosInput = await askQuestion('Enter starting position and direction (x y D) e.g., "0 0 N": ');
            const [xStr, yStr, directionStr] = startPosInput.trim().split(' ');
            startX = parseInt(xStr, 10);
            startY = parseInt(yStr, 10);
            direction = directionStr.toUpperCase() as Direction;

            if (isNaN(startX) || isNaN(startY)) {
                console.error('Invalid starting coordinates. Please enter two integers separated by a space.');
            } else if (startX < 0 || startX >= width || startY < 0 || startY >= height) {
                console.error(`Starting position (${startX}, ${startY}) is out of grid bounds.`);
            } else if (!['N', 'S', 'E', 'W'].includes(directionStr.toUpperCase())) {
                console.error('Invalid direction. Please enter one of N, S, E, W.');
            } else if (obstacles.some(ob => ob.isAtPosition(startX, startY))) {
                console.error(`Starting position (${startX}, ${startY}) is occupied by an obstacle.`);
            } else {
                break;
            }
        }

        // Get Commands
        let commands: string[];
        while (true) {
            const commandsInput = await askQuestion('Enter commands as a sequence (e.g., "MMLMRM"): ');
            commands = commandsInput.trim().toUpperCase().split('');

            const invalidCommands = commands.filter(cmd => !['M', 'L', 'R'].includes(cmd));
            if (invalidCommands.length > 0) {
                console.error(`Invalid commands detected: ${invalidCommands.join(', ')}. Please use only M, L, R.`);
            } else {
                break;
            }
        }

        // Initialize App
        const app = new App(width, height, obstacles, startX, startY, direction);

        // Process Commands
        app.processCommands(commands);
        app.getFinalStatus();

    } catch (error) {
        console.error('Error:', (error as Error).message);
    } finally {
        rl.close();
    }
};

runSimulation();
