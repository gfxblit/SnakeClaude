import { Direction, DirectionVector, getNewDirection } from './game.js';

/**
 * @file Handles player input.
 */

/**
 * Sets up input handling for the game.
 * @param {object} gameState The game state to modify based on input.
 * @returns {function} A function to remove the event listener.
 */
export function handleInput(gameState) {
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        gameState.snake.direction = getNewDirection(gameState.snake.direction, 'LEFT');
        break;
      case 'ArrowRight':
        gameState.snake.direction = getNewDirection(gameState.snake.direction, 'RIGHT');
        break;
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  let touchStartX = 0;
  let touchStartY = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal swipe
      if (dx > 0) { // Swipe Right
        gameState.snake.direction = getNewDirection(gameState.snake.direction, 'RIGHT');
      } else if (dx < 0) { // Swipe Left
        gameState.snake.direction = getNewDirection(gameState.snake.direction, 'LEFT');
      }
    } else {
      // Vertical swipe - for relative controls, vertical swipe does nothing.
      // This could be customized for "accelerate" or "decelerate" if needed.
    }
  };

  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchend', handleTouchEnd);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchend', handleTouchEnd);
  };
}