/**
 * @file Renders the game state on the canvas.
 */

import { GRID_SIZE } from './config.js';

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
  canvas.width = GRID_SIZE * 20;
  canvas.height = GRID_SIZE * 20;


  // Draw food
  context.fillStyle = 'red';
  context.fillRect(gameState.food.x * GRID_SIZE, gameState.food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

  // Draw snake
  context.fillStyle = 'green';
  gameState.snake.body.forEach(segment => {
    context.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  });
}
