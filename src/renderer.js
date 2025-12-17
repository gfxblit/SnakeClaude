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

  // Set canvas dimensions based on grid size
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  // Clear canvas and set background to black
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#000'; // Black background for neon effect
  context.fillRect(0, 0, canvas.width, canvas.height);


  // Draw food
  context.fillStyle = FOOD_COLOR;
  context.shadowColor = FOOD_COLOR; // Set shadow color to food color
  context.shadowBlur = 15; // Set shadow blur for glow effect
  gameState.food.forEach(foodItem => {
    context.fillRect(foodItem.x * GRID_SIZE, foodItem.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  });

  // Draw snake
  context.fillStyle = SNAKE_COLOR;
  context.shadowColor = SNAKE_COLOR; // Set shadow color to snake color
  context.shadowBlur = 15; // Set shadow blur for glow effect
  gameState.snake.body.forEach(segment => {
    context.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  });

  // Reset shadow properties to avoid affecting other drawings
  context.shadowBlur = 0;
  context.shadowColor = 'rgba(0, 0, 0, 0)';
}
