import { handleInput } from './input.js';
import { createGameState } from './game.js';

describe('handleInput', () => {
  let gameState;
  let cleanupInput;

  beforeEach(() => {
    gameState = createGameState();
    cleanupInput = handleInput(gameState);
  });

  afterEach(() => {
    cleanupInput();
  });

  it('should change snake direction to up', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    expect(gameState.snake.direction).toEqual({ x: 0, y: -1 });
  });

  it('should change snake direction to down', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    expect(gameState.snake.direction).toEqual({ x: 0, y: 1 });
  });

  it('should change snake direction to left', () => {
    gameState.snake.direction = { x: 0, y: 1 };
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(gameState.snake.direction).toEqual({ x: -1, y: 0 });
  });

  it('should change snake direction to right', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(gameState.snake.direction).toEqual({ x: 1, y: 0 });
  });

  it('should not change snake direction to opposite direction', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(gameState.snake.direction).toEqual({ x: 1, y: 0 });
  });
});
