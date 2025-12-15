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
        if (gameState.snake.direction.y === 0) {
          gameState.snake.direction = { x: 0, y: -1 };
        }
        break;
      case 'ArrowDown':
        if (gameState.snake.direction.y === 0) {
          gameState.snake.direction = { x: 0, y: 1 };
        }
        break;
      case 'ArrowLeft':
        if (gameState.snake.direction.x === 0) {
          gameState.snake.direction = { x: -1, y: 0 };
        }
        break;
      case 'ArrowRight':
        if (gameState.snake.direction.x === 0) {
          gameState.snake.direction = { x: 1, y: 0 };
        }
        break;
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}
