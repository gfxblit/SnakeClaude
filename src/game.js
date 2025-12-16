/**
 * @file Manages the core game logic and state.
 */

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
  return {
    snake: {
      body: [{ x: 10, y: 10 }],
      direction: Direction.RIGHT, // Use the Direction enum
    },
    food: [{ x: 5, y: 5 }],
    score: 0,
    status: GameStatus.PLAYING,
  };
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
