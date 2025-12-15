import { handleInput } from './input.js';
import { createGameState, Direction } from './game.js';

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
    expect(gameState.snake.direction).toEqual(Direction.UP);
  });

  it('should change snake direction to down', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    expect(gameState.snake.direction).toEqual(Direction.DOWN);
  });

  it('should change snake direction to left', () => {
    gameState.snake.direction = Direction.DOWN; // Set an initial direction not opposing left
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(gameState.snake.direction).toEqual(Direction.LEFT);
  });

  it('should change snake direction to right', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(gameState.snake.direction).toEqual(Direction.RIGHT);
  });

  it('should change snake direction to up with touch', () => {
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 10 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 0 }] }));
    expect(gameState.snake.direction).toEqual(Direction.UP);
  });

  it('should change snake direction to down with touch', () => {
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 10 }] }));
    expect(gameState.snake.direction).toEqual(Direction.DOWN);
  });

  it('should change snake direction to left with touch', () => {
    gameState.snake.direction = Direction.DOWN; // Set an initial direction not opposing left
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 10, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 0 }] }));
    expect(gameState.snake.direction).toEqual(Direction.LEFT);
  });

  it('should change snake direction to right with touch', () => {
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 10, clientY: 0 }] }));
    expect(gameState.snake.direction).toEqual(Direction.RIGHT);
  });

  it('should not change snake direction to opposite direction with touch', () => {
    gameState.snake.direction = Direction.RIGHT; // Snake moving right
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 10, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 0 }] })); // Try to go left
    expect(gameState.snake.direction).toEqual(Direction.RIGHT); // Should still be right
  });
});


