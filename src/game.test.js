import { createGameState, GameStatus } from './game.js';

describe('createGameState', () => {
  it('should return the initial game state', () => {
    const gameState = createGameState();
    expect(gameState).toEqual({
      snake: {
        body: [{ x: 10, y: 10 }],
        direction: { x: 1, y: 0 },
      },
      food: { x: 5, y: 5 },
      score: 0,
      status: GameStatus.PLAYING,
    });
  });
});
