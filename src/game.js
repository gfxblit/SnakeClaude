/**
 * @file Manages the core game logic and state.
 */
import { GRID_SIZE } from "./config.js";
/**
 * Represents the different states of the game.
 * @enum {string}
 */
export const GameStatus = Object.freeze({
    MAIN_MENU: "MainMenu",
    PLAYING: "Playing",
    GAME_OVER: "GameOver",
});
/**
 * Represents the directions.
 * @enum {string}
 */
export const Direction = Object.freeze({
    UP: "Up",
    DOWN: "Down",
    LEFT: "Left",
    RIGHT: "Right",
});
/**
 * Maps directions to coordinate changes.
 * @type {object}
 */
export const DirectionVector = Object.freeze({
    [Direction.UP]: { x: 0, y: -1 },
    [Direction.DOWN]: { x: 0, y: 1 },
    [Direction.LEFT]: { x: -1, y: 0 },
    [Direction.RIGHT]: { x: 1, y: 0 },
});
/**
 * Creates the initial game state.
 * @returns {object} The initial game state.
 */
export function createGameState() {
    return {
        snake: {
            body: [{ x: 10, y: 10 }],
            direction: Direction.RIGHT, // Use the Direction enum
        },
        food: [{ x: 5, y: 5 }], // This will be replaced by generateFood in startGame
        score: 0,
        status: GameStatus.MAIN_MENU,
    };
}
/**
 * Calculates the new direction based on the current direction and a turn input.
 * @param {string} currentDirection The snake's current direction (from Direction enum).
 * @param {string} turn The turn input ('LEFT' or 'RIGHT').
 * @returns {string} The new direction (from Direction enum).
 */
export function getNewDirection(currentDirection, turn) {
    const directions = [
        Direction.UP,
        Direction.RIGHT,
        Direction.DOWN,
        Direction.LEFT,
    ];
    const currentIndex = directions.indexOf(currentDirection);
    if (turn === "LEFT") {
        return directions[(currentIndex + directions.length - 1) % directions.length];
    } else if (turn === "RIGHT") {
        return directions[(currentIndex + 1) % directions.length];
    }
    return currentDirection; // Should not happen
}
/**
 * Starts or restarts the game.
 * @param {object} gameState The current game state.
 */
export function startGame(gameState) {
    gameState.status = GameStatus.PLAYING;
    gameState.snake = {
        body: [{ x: 10, y: 10 }],
        direction: Direction.RIGHT,
    };
    gameState.food = [generateFood(gameState)];
    gameState.score = 0;
}
/**
 * Moves the snake and handles game logic like eating food.
 * @param {object} gameState The current game state.
 */
export function moveSnake(gameState) {
    const { snake, food } = gameState;
    const vector = DirectionVector[snake.direction];
    const head = snake.body[0];
    const newHead = { x: head.x + vector.x, y: head.y + vector.y };
    const ateFood = food.some(
        (foodItem) => foodItem.x === newHead.x && foodItem.y === newHead.y
    );
    if (ateFood) {
        gameState.score += 1;
        gameState.food = [generateFood(gameState)]; // Generate new food
    }
    snake.body.unshift(newHead); // Add new head
    if (!ateFood) {
        snake.body.pop(); // Remove tail
    }
}
/**
 * Checks for collisions with walls or the snake's own body.
 * @param {object} gameState The current game state.
 * @returns {boolean} True if a collision occurred, false otherwise.
 */
export function checkCollision(gameState) {
    const { snake } = gameState;
    const head = snake.body[0];
    // Wall collision
    if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
    ) {
        return true;
    }
    // Self collision
    for (let i = 1; i < snake.body.length; i++) {
        if (head.x === snake.body[i].x && head.y === snake.body[i].y) {
            return true;
        }
    }
    return false;
}
/**
 * Generates a new food item at a random position.
 * @param {object} gameState The current game state, used to avoid placing food on the snake.
 * @returns {object} The new food item with x and y coordinates.
 */
export function generateFood(gameState) {
    let foodPosition;
    do {
        foodPosition = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        };
    } while (
        gameState.snake.body.some(
            (segment) =>
                segment.x === foodPosition.x && segment.y === foodPosition.y
        )
    );
    return foodPosition;
}
