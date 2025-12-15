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
  PAUSED: 'Paused',
  GAME_OVER: 'GameOver',
});

/**
 * Creates the initial game state.
 * @returns {object} The initial game state.
 */
export function createGameState() {
  return {
    snake: {
      body: [{ x: 10, y: 10 }],
      direction: { x: 1, y: 0 },
    },
    food: { x: 5, y: 5 },
    score: 0,
    status: GameStatus.PLAYING,
  };
}
