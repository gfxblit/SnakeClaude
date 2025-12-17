import { createGameState, GameStatus, Direction, moveSnake, checkCollision, getNewDirection } from './game.js';
import { GRID_SIZE } from './config.js';

describe('createGameState', () => {
  it('should return the initial game state', () => {
    const gameState = createGameState();
    expect(gameState.snake.body).toEqual([{ x: 10, y: 10 }]);
    expect(gameState.snake.direction).toBe(Direction.RIGHT);
    expect(gameState.score).toBe(0);
    expect(gameState.status).toBe(GameStatus.MAIN_MENU);
    expect(gameState.food.length).toBe(1);
    const food = gameState.food[0];
    expect(food.x).toBeGreaterThanOrEqual(0);
    expect(food.x).toBeLessThan(GRID_SIZE);
    expect(food.y).toBeGreaterThanOrEqual(0);
    expect(food.y).toBeLessThan(GRID_SIZE);
  });
});

describe('moveSnake', () => {
  it('should move the snake forward', () => {
    const gameState = createGameState();
    gameState.snake.direction = Direction.RIGHT;
    moveSnake(gameState);
    expect(gameState.snake.body[0]).toEqual({ x: 11, y: 10 });
  });

  it('should not grow the snake if it does not eat food', () => {
    const gameState = createGameState();
    const initialLength = gameState.snake.body.length;
    moveSnake(gameState);
    expect(gameState.snake.body.length).toBe(initialLength);
  });

  it('should grow the snake if it eats food', () => {
    const gameState = createGameState();
    const initialLength = gameState.snake.body.length;
    gameState.food = [{ x: 11, y: 10 }];
    gameState.snake.direction = Direction.RIGHT;
    moveSnake(gameState);
    expect(gameState.snake.body.length).toBe(initialLength + 1);
  });
});

describe('checkCollision', () => {
  it('should return true if the snake hits a wall', () => {
    const gameState = createGameState();
    gameState.snake.body = [{ x: -1, y: 10 }];
    expect(checkCollision(gameState)).toBe(true);
  });

  it('should return true if the snake hits itself', () => {
    const gameState = createGameState();
    gameState.snake.body = [{ x: 10, y: 10 }, { x: 10, y: 10 }];
    expect(checkCollision(gameState)).toBe(true);
  });

  it('should return false if there is no collision', () => {
    const gameState = createGameState();
    expect(checkCollision(gameState)).toBe(false);
  });
});

describe('getNewDirection', () => {
  it('should turn left', () => {
    expect(getNewDirection(Direction.UP, 'LEFT')).toBe(Direction.LEFT);
    expect(getNewDirection(Direction.LEFT, 'LEFT')).toBe(Direction.DOWN);
    expect(getNewDirection(Direction.DOWN, 'LEFT')).toBe(Direction.RIGHT);
    expect(getNewDirection(Direction.RIGHT, 'LEFT')).toBe(Direction.UP);
  });

  it('should turn right', () => {
    expect(getNewDirection(Direction.UP, 'RIGHT')).toBe(Direction.RIGHT);
    expect(getNewDirection(Direction.RIGHT, 'RIGHT')).toBe(Direction.DOWN);
    expect(getNewDirection(Direction.DOWN, 'RIGHT')).toBe(Direction.LEFT);
    expect(getNewDirection(Direction.LEFT, 'RIGHT')).toBe(Direction.UP);
  });
});
