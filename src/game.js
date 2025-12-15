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
