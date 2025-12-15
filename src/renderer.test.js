import { render } from './renderer.js';
import { createGameState } from './game.js';
import { GRID_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT, FOOD_COLOR, SNAKE_COLOR } from './config.js';

describe('render', () => {
  let canvas;
  let context;
  let gameState;

  beforeEach(() => {
    canvas = {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
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
    expect(canvas.width).toBe(CANVAS_WIDTH);
    expect(canvas.height).toBe(CANVAS_HEIGHT);
  });

  it('should draw the food', () => {
    render(gameState, canvas);
    gameState.food.forEach(foodItem => {
      expect(context.fillRect).toHaveBeenCalledWith(
        foodItem.x * GRID_SIZE,
        foodItem.y * GRID_SIZE,
        GRID_SIZE,
        GRID_SIZE
      );
    });
  });

  it('should draw the snake', () => {
    render(gameState, canvas);
    expect(context.fillStyle).toBe(SNAKE_COLOR);
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
