import { render } from './renderer.js';
import { createGameState } from './game.js';
import { GRID_SIZE } from './config.js';

describe('render', () => {
  let canvas;
  let context;
  let gameState;

  beforeEach(() => {
    canvas = {
      width: GRID_SIZE * 20,
      height: GRID_SIZE * 20,
      getContext: jest.fn(() => context),
    };
    context = {
      clearRect: jest.fn(),
      fillRect: jest.fn(),
      fillStyle: '',
    };
    gameState = createGameState();
  });

  it('should clear the canvas', () => {
    render(gameState, canvas);
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
  });

  it('should set canvas dimensions', () => {
    render(gameState, canvas);
    expect(canvas.width).toBe(GRID_SIZE * 20);
    expect(canvas.height).toBe(GRID_SIZE * 20);
  });

  it('should draw the food', () => {
    render(gameState, canvas);
    expect(context.fillRect).toHaveBeenCalledWith(
      gameState.food.x * GRID_SIZE,
      gameState.food.y * GRID_SIZE,
      GRID_SIZE,
      GRID_SIZE
    );
  });

  it('should draw the snake', () => {
    render(gameState, canvas);
    expect(context.fillStyle).toBe('green');
    gameState.snake.body.forEach(segment => {
      expect(context.fillRect).toHaveBeenCalledWith(
        segment.x * GRID_SIZE,
        segment.y * GRID_SIZE,
        GRID_SIZE,
        GRID_SIZE
      );
    });
  });
});
