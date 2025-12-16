import { handleInput } from './input.js';
import { createGameState, Direction, GameStatus } from './game.js';

describe('handleInput', () => {
  let gameState;
  let cleanupInput;

  beforeEach(() => {
    gameState = createGameState();
    gameState.status = GameStatus.PLAYING; // Ensure game is in playing state for input tests
    cleanupInput = handleInput(gameState);
  });

  afterEach(() => {
    cleanupInput();
  });

  // Test keyboard input for relative turns
  it('should turn left when "ArrowLeft" is pressed (from RIGHT)', () => {
    gameState.snake.direction = Direction.RIGHT;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(gameState.snake.direction).toEqual(Direction.UP);
  });

  it('should turn right when "ArrowRight" is pressed (from RIGHT)', () => {
    gameState.snake.direction = Direction.RIGHT;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(gameState.snake.direction).toEqual(Direction.DOWN);
  });

  it('should turn left when "ArrowLeft" is pressed (from UP)', () => {
    gameState.snake.direction = Direction.UP;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(gameState.snake.direction).toEqual(Direction.LEFT);
  });

  it('should turn right when "ArrowRight" is pressed (from UP)', () => {
    gameState.snake.direction = Direction.UP;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(gameState.snake.direction).toEqual(Direction.RIGHT);
  });

  it('should turn left when "ArrowLeft" is pressed (from LEFT)', () => {
    gameState.snake.direction = Direction.LEFT;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(gameState.snake.direction).toEqual(Direction.DOWN);
  });

  it('should turn right when "ArrowRight" is pressed (from LEFT)', () => {
    gameState.snake.direction = Direction.LEFT;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(gameState.snake.direction).toEqual(Direction.UP);
  });

  it('should turn left when "ArrowLeft" is pressed (from DOWN)', () => {
    gameState.snake.direction = Direction.DOWN;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    expect(gameState.snake.direction).toEqual(Direction.RIGHT);
  });

  it('should turn right when "ArrowRight" is pressed (from DOWN)', () => {
    gameState.snake.direction = Direction.DOWN;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    expect(gameState.snake.direction).toEqual(Direction.LEFT);
  });

  // Test touch input for relative turns
  it('should turn right with horizontal swipe (from RIGHT)', () => {
    gameState.snake.direction = Direction.RIGHT;
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 10, clientY: 0 }] })); // Swipe Right
    expect(gameState.snake.direction).toEqual(Direction.DOWN);
  });

  it('should turn left with horizontal swipe (from RIGHT)', () => {
    gameState.snake.direction = Direction.RIGHT;
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 10, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 0 }] })); // Swipe Left
    expect(gameState.snake.direction).toEqual(Direction.UP);
  });

  it('should not turn down if currently moving UP', () => {
    gameState.snake.direction = Direction.UP;
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 10 }] })); // Swipe Down
    expect(gameState.snake.direction).toEqual(Direction.UP); // Should remain UP
  });

  it('should not turn up if currently moving DOWN', () => {
    gameState.snake.direction = Direction.DOWN;
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 10 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 0 }] })); // Swipe Up
    expect(gameState.snake.direction).toEqual(Direction.DOWN); // Should remain DOWN
  });

  it('should turn right if currently moving UP and swiped RIGHT', () => {
    gameState.snake.direction = Direction.UP;
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 10, clientY: 0 }] })); // Swipe Right
    expect(gameState.snake.direction).toEqual(Direction.RIGHT);
  });

  it('should turn left if currently moving UP and swiped LEFT', () => {
    gameState.snake.direction = Direction.UP;
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 10, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 0, clientY: 0 }] })); // Swipe Left
    expect(gameState.snake.direction).toEqual(Direction.LEFT);
  });

  it('should not change direction with a small swipe', () => {
    gameState.snake.direction = Direction.RIGHT;
    document.dispatchEvent(new TouchEvent('touchstart', { touches: [{ clientX: 0, clientY: 0 }] }));
    document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [{ clientX: 1, clientY: 1 }] })); // Small diagonal swipe
    expect(gameState.snake.direction).toEqual(Direction.RIGHT);
  });
});


