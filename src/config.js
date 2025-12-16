/**
 * @file Contains game configuration settings.
 */

export const GRID_SIZE = 20;
export const CANVAS_WIDTH = GRID_SIZE * 20;
export const CANVAS_HEIGHT = GRID_SIZE * 20;
export const FOOD_COLOR = 'red';
export const SNAKE_COLOR = 'green';
export const FRAME_RATE = 5; // frames per second

// Snake Speed Ramping Configuration
// These values control how frequently the snake moves within the game loop.
// A higher DELAY_FRAMES means the snake moves less frequently (slower).
// The speed will increase by decreasing the DELAY_FRAMES.
export const GAME_SPEED_INITIAL_DELAY_FRAMES = 10;
export const GAME_SPEED_MIN_DELAY_FRAMES = 2; // Fastest speed (moves every 2 game frames)
export const GAME_SPEED_DECREMENT_INTERVAL = 3; // Decrease delay by 1 frame every N food eaten
export const GAME_SPEED_DECREMENT_AMOUNT = 1; // Amount to decrease the delay by
