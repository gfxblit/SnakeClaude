/**
 * @file Manages the UI elements.
 */

/**
 * Updates the UI with the current game state.
 * @param {object} gameState The current game state.
 */
export function updateUI(gameState) {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = gameState.score;
}
