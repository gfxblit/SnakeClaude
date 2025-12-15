/**
 * @file Renders the game state on the canvas.
 */

import { GRID_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT, FOOD_COLOR, SNAKE_COLOR } from './config.js';

/**
 * Renders the game state on the canvas.
 * @param {object} gameState The current game state.
 * @param {HTMLCanvasElement} canvas The canvas element to draw on.
 */
export function render(gameState, canvas) {
  const context = canvas.getContext('2d');

  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Set canvas dimensions based on grid size
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;


  // Draw food
  context.fillStyle = FOOD_COLOR;
  gameState.food.forEach(foodItem => {
    context.fillRect(foodItem.x * GRID_SIZE, foodItem.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  });

  // Draw snake
  context.fillStyle = SNAKE_COLOR;
  gameState.snake.body.forEach(segment => {
    context.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  });
}
