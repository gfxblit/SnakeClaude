import { Direction, DirectionVector } from './game.js';

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
      case 'ArrowUp':
        if (gameState.snake.direction !== Direction.DOWN) {
          gameState.snake.direction = Direction.UP;
        }
        break;
      case 'ArrowDown':
        if (gameState.snake.direction !== Direction.UP) {
          gameState.snake.direction = Direction.DOWN;
        }
        break;
      case 'ArrowLeft':
        if (gameState.snake.direction !== Direction.RIGHT) {
          gameState.snake.direction = Direction.LEFT;
        }
        break;
      case 'ArrowRight':
        if (gameState.snake.direction !== Direction.LEFT) {
          gameState.snake.direction = Direction.RIGHT;
        }
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
      if (dx > 0 && gameState.snake.direction !== Direction.LEFT) {
        gameState.snake.direction = Direction.RIGHT;
      } else if (dx < 0 && gameState.snake.direction !== Direction.RIGHT) {
        gameState.snake.direction = Direction.LEFT;
      }
    } else {
      // Vertical swipe
      if (dy > 0 && gameState.snake.direction !== Direction.UP) {
        gameState.snake.direction = Direction.DOWN;
      } else if (dy < 0 && gameState.snake.direction !== Direction.DOWN) {
        gameState.snake.direction = Direction.UP;
      }
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