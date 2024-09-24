# Task 1
The task was to creatively come up with six different use cases to demonstrate understanding of the given software design patterns by coding the same. 
### Use Cases:
**1. Behavioral Design Patterns**

Observer Pattern: Demonstrated through a stock market example where investors subscribe to stock price changes.

```observerUseCase1.ts``` and ```observerUseCase2.ts```

Strategy Pattern: Demonstrated via payment processing systems and sorting algorithms.

```strategyUseCase1.ts``` (Payments via PayPal and Credit Cards) and ```
strategyUseCase2.ts ```(Sorting with MergeSort and QuickSort)

**2. Creational Design Patterns**

Factory Pattern: Demonstrated by creating different types of loggers (FileLogger, ConsoleLogger) and notification systems (Email, SMS).

```factoryUseCase1.ts```(Logging systems) and
```factoryUseCase2.ts``` (Notification systems)

Singleton Pattern: Demonstrated by creating a single instance of a database connection and configuration manager.

```singletonUseCase1.ts``` and ```
singletonUseCase2.ts ```

**3. Structural Design Patterns**

Adapter Pattern: Demonstrated by integrating old legacy systems with new payment gateways like PayPal and Stripe.

```adapterUseCase1.ts``` (Legacy System Adapter) and
```adapterUseCase2.ts``` (Payment Gateway Adapter)

Decorator Pattern: Demonstrated by decorating notifications (SMS, Slack) and text editors (bold, italic formatting).

```decoratorUseCase1.ts``` and
```decoratorUseCase2.ts```

**Logging and Error Handling**

Each design pattern implementation includes:

**1. Logging Mechanism:**

A robust logging system using custom loggers like ConsoleLogger and FileLogger. These loggers are created via the Factory Pattern.
Log messages are categorized by severity levels (INFO, ERROR, DEBUG) for better debugging and maintenance.

**2. Error Handling:**

All use cases follow best practices for exception handling using try-catch blocks to gracefully handle runtime errors.

**3. Validation and Defensive Programming:**

Validations are implemented at every level, including user inputs and class constructors, to prevent potential failures and invalid states.

### Usage Instructions:

**Step 1: Running a Use Case**

Navigate to the directory where the use case resides. For example, to run a use case in the observer pattern:

```cd src/behavioral/observer```

**Step 2:**
Compile the TypeScript code using tsc:

```tsc observerUseCase1.ts```

**Step 3:**
Execute the compiled JavaScript file:

```node observerUseCase1.js```

Repeat this process for other use cases.

# Task 2

The Mars Rover Simulation is a console-based application built in TypeScript that emulates the navigation of a Mars Rover on a grid-based terrain. Leveraging Object-Oriented Programming principles and design patterns such as Command and Composite, the rover can execute a series of commands to move forward, turn left, or turn right while avoiding obstacles and staying within the grid boundaries. The application emphasizes clean code architecture, robust error handling, and user-friendly interactions.

### Features:

Command Pattern: Encapsulates commands (Move, TurnLeft, TurnRight) as objects for flexibility and scalability.

Composite Pattern: Represents the grid and obstacles in a hierarchical structure.

Object-Oriented Design: Utilizes encapsulation, inheritance, and polymorphism for a modular and maintainable codebase.

Dynamic Obstacle Input: Allows users to define the number and positions of obstacles dynamically.

Robust Input Validation: Ensures all user inputs are correctly formatted and within valid ranges.

Comprehensive Logging: Implements a singleton logger for consistent and detailed logging throughout the application.

Error Handling: Custom exceptions and defensive programming to handle unexpected scenarios gracefully.

Status Reporting: Provides a final status report of the rover's position and orientation.

### Usage Instructions:
Start the Mars Rover Simulation by executing the following command:

```npm start```

### Step-by-Step Guide:

Enter Grid Size:  

Prompt: Enter grid size (width height) e.g., "10 10":


Input: Provide two positive integers separated by a space.
Example: 10 10
Enter Number of Obstacles:

Prompt: Enter number of obstacles:
Input: Provide a non-negative integer.
Example: 2
Enter Obstacle Positions:

Prompt: Enter obstacle 1 position (x y):

Input: Provide two integers separated by a space within grid bounds.

Example: 2 2

Prompt: Enter obstacle 2 position (x y):

Input: 3 5

Enter Starting Position and Direction:

Prompt: Enter starting position and direction (x y D) e.g., "0 0 N":

Input: Provide two integers and a direction (N, S, E, W) separated by spaces.

Example: 0 0 N

Enter Commands:

Prompt: Enter commands as a sequence (e.g., "MMLMRM"):

Input: Provide a sequence of commands without spaces. Valid commands are M (Move), L (Turn Left), R (Turn Right).

Example: MMRMLM

### Expected Output: 

Based on the input above, the expected output is:
```
Rover initialized at (0, 0) facing N
Rover moved to (0, 1)
Rover moved to (0, 2)
Rover turned right. Now facing E
Rover moved to (1, 2)
Rover turned left. Now facing N
Rover moved to (1, 3)
Rover is at (1, 3) facing N. No obstacles detected.
```
**Important Note:**

For the provided command sequence MMRMLM, the rover ends at (1, 3, N)—facing North. To achieve the expected output given in the file ,that is, (1, 3, E)—facing East, an additional R (Right Turn) command is required at the end of the sequence. Therefore, the corrected command sequence should be **MMRMLMR**.
