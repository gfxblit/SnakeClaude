/**
 * @file Contains game configuration settings.
 */

export const GRID_SIZE = 20;
export const CANVAS_WIDTH = GRID_SIZE * 20;
export const CANVAS_HEIGHT = GRID_SIZE * 20;
export const NEON_RED = '#FF0033';
export const NEON_GREEN = '#39FF14';
export const NEON_BLUE = '#00FFFF';
export const FOOD_COLOR = NEON_RED;
export const SNAKE_COLOR = NEON_GREEN;
export const FRAME_RATE = 5; // frames per second


export const SNAKE_SPEED_CELLS_PER_SECOND = 2; // Snake moves 2 grid cells per second
export const SNAKE_SPEED_INCREMENT_INTERVAL_SCORE = 1; // Increase speed every x points
export const SNAKE_SPEED_INCREMENT_AMOUNT = 2; // Increase speed by x cells/sec
export const SNAKE_SPEED_MAX_CELLS_PER_SECOND = 100; // Maximum snake speed
