/**
 * @file Manages the UI elements.
 */

/**
 * Updates the UI with the current game state.
 * @param {object} gameState The current game state.
 * @param {function} onRestart Callback function to restart the game.
 */
export function updateUI(gameState, onRestart) {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = gameState.score;

  const gameOverScreen = document.getElementById('gameOverScreen');
  const restartButton = document.getElementById('restartButton');

  if (gameState.status === 'GAME_OVER') {
    gameOverScreen.style.display = 'flex';
    restartButton.onclick = onRestart;
  } else {
    gameOverScreen.style.display = 'none';
  }
}
