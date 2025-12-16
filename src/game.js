import { GRID_SIZE } from './config.js';

/**
 * Represents the different states of the game.
 * @enum {string}
 */
export const GameStatus = Object.freeze({
  MAIN_MENU: 'MainMenu',
  PLAYING: 'Playing',

  GAME_OVER: 'GameOver',
});

/**
 * Represents the directions.
 * @enum {string}
 */
export const Direction = Object.freeze({
  UP: 'Up',
  DOWN: 'Down',
  LEFT: 'Left',
  RIGHT: 'Right',
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
  const snakeBody = [{ x: 10, y: 10 }];
  const gameState = {
    snake: {
      body: snakeBody,
      direction: Direction.RIGHT,
    },
    food: [],
    score: 0,
    status: GameStatus.PLAYING,
  };

  generateFood(gameState);
  return gameState;
}

/**
 * Calculates the new direction based on the current direction and a turn input.
 * @param {string} currentDirection The snake's current direction (from Direction enum).
 * @param {string} turn The turn input ('LEFT' or 'RIGHT').
 * @returns {string} The new direction (from Direction enum).
 */
export function getNewDirection(currentDirection, turn) {
  const directions = [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.LEFT];
  const currentIndex = directions.indexOf(currentDirection);

  if (turn === 'LEFT') {
    return directions[(currentIndex + directions.length - 1) % directions.length];
  } else if (turn === 'RIGHT') {
    return directions[(currentIndex + 1) % directions.length];
  }
  return currentDirection; // Should not happen
}


/**
 * Moves the snake forward by one step.
 * @param {object} gameState The entire game state.
 */
export function moveSnake(gameState) {
  const head = gameState.snake.body[0];
  const directionVector = DirectionVector[gameState.snake.direction];

  const newHead = {
    x: head.x + directionVector.x,
    y: head.y + directionVector.y,
  };

  gameState.snake.body.unshift(newHead);

  if (checkCollision(gameState)) {
    gameState.status = GameStatus.GAME_OVER;
    return;
  }

  if (!eatFood(gameState)) {
    gameState.snake.body.pop();
  }
}

/**
 * Checks for collisions with walls or the snake's own body.
 * @param {object} gameState The entire game state.
 * @returns {boolean} True if a collision occurred, false otherwise.
 */
export function checkCollision(gameState) {
  const head = gameState.snake.body[0];

  // Wall collision
  if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
    return true;
  }

  // Self collision
  for (let i = 1; i < gameState.snake.body.length; i++) {
    if (head.x === gameState.snake.body[i].x && head.y === gameState.snake.body[i].y) {
      return true;
    }
  }

  return false;
}

/**
 * Generates a new food item at a random position.
 * @param {object} gameState The entire game state.
 */
export function generateFood(gameState) {
  let newFoodPosition;
  while (true) {
    newFoodPosition = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    let onSnake = false;
    for (const segment of gameState.snake.body) {
      if (segment.x === newFoodPosition.x && segment.y === newFoodPosition.y) {
        onSnake = true;
        break;
      }
    }
    if (!onSnake) {
      break;
    }
  }
  gameState.food = [newFoodPosition];
}

/**
 * Checks if the snake has eaten food and handles the consequences.
 * @param {object} gameState The entire game state.
 * @returns {boolean} True if food was eaten, false otherwise.
 */
export function eatFood(gameState) {
  const head = gameState.snake.body[0];
  const food = gameState.food[0];

  if (head.x === food.x && head.y === food.y) {
    gameState.score++;
    generateFood(gameState);
    return true;
  }
  return false;
}
