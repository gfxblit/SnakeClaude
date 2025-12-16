import { Direction, getNewDirection, GameStatus, startGame } from './game.js';

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
    switch (gameState.status) {
      case GameStatus.MAIN_MENU:
      case GameStatus.GAME_OVER:
        if (e.key === 'Enter') {
          startGame(gameState);
        }
        break;
      case GameStatus.PLAYING:
        switch (e.key) {
          case 'ArrowLeft':
            gameState.snake.direction = getNewDirection(gameState.snake.direction, 'LEFT');
            break;
          case 'ArrowRight':
            gameState.snake.direction = getNewDirection(gameState.snake.direction, 'RIGHT');
            break;
        }
        break;
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  let touchStartX = 0;
  let touchStartY = 0;

  const handleTouchStart = (e) => {
    if (gameState.status !== GameStatus.PLAYING) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (gameState.status !== GameStatus.PLAYING) return;
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
    } else if (Math.abs(dy) > Math.abs(dx)) {
      // Vertical swipe
      if (dy > 0) { // Swipe Down
        gameState.snake.direction = getNewDirection(gameState.snake.direction, 'DOWN');
      } else if (dy < 0) { // Swipe Up
        gameState.snake.direction = getNewDirection(gameState.snake.direction, 'UP');
      }
    }
  };

  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchend', handleTouchEnd);

  // Handle Enter key for main menu and game over on touch devices
  const handleTouchTap = (e) => {
    if (gameState.status === GameStatus.MAIN_MENU || gameState.status === GameStatus.GAME_OVER) {
      startGame(gameState);
    }
  };

  document.addEventListener('touchend', handleTouchTap);


  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchend', handleTouchTap);
  };
}