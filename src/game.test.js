import { createGameState, GameStatus, Direction, moveSnake, checkCollision, getNewDirection, startGame, updateGameStateOnGameOver } from './game.js';
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
    expect(gameState.highScore).toBe(0); // Assuming no high score initially
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

  it('should increase the score when food is eaten', () => {
    const gameState = createGameState();
    gameState.food = [{ x: 11, y: 10 }];
    gameState.snake.direction = Direction.RIGHT;
    moveSnake(gameState);
    expect(gameState.score).toBe(1);
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

describe('High Score', () => {
  let localStorageMock = {};

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key) => localStorageMock[key]),
        setItem: jest.fn((key, value) => {
          localStorageMock[key] = value;
        }),
        clear: jest.fn(() => {
          localStorageMock = {};
        }),
      },
      writable: true,
    });
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it('should load high score from localStorage', () => {
    localStorage.setItem('snakeClaudeHighScore', '100');
    const gameState = createGameState();
    expect(gameState.highScore).toBe(100);
  });

  it('should save high score to localStorage when a new high score is achieved', () => {
    const gameState = createGameState();
    gameState.score = 50;
    gameState.highScore = 0; // Simulate initial state
    updateGameStateOnGameOver(gameState);
    expect(localStorage.getItem('snakeClaudeHighScore')).toBe('50');
    expect(gameState.highScore).toBe(50);
  });

  it('should not save high score if current score is not higher', () => {
    localStorage.setItem('snakeClaudeHighScore', '100');
    const gameState = createGameState();
    gameState.score = 50;
    expect(gameState.highScore).toBe(100);
    updateGameStateOnGameOver(gameState);
    expect(localStorage.getItem('snakeClaudeHighScore')).toBe('100');
    expect(gameState.highScore).toBe(100);
  });

  it('should reset score but retain high score on new game', () => {
    localStorage.setItem('snakeClaudeHighScore', '75');
    const gameState = createGameState();
    gameState.score = 10;
    startGame(gameState);
    expect(gameState.score).toBe(0);
    expect(gameState.highScore).toBe(75);
  });
});

