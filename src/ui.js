/**
 * @file Manages the UI elements.
 */

import { GameStatus } from './game.js';

export const mainMenu = document.getElementById('main-menu');
export const gameOverScreen = document.getElementById('game-over');
export const hud = document.getElementById('ui');
export const scoreElement = document.getElementById('score');
export const highScoreElement = document.getElementById('high-score');

/**
 * Renders the UI based on the game state.
 * @param {object} gameState The current game state.
 */
export function renderUI(gameState) {
  switch (gameState.status) {
    case GameStatus.MAIN_MENU:
      mainMenu.classList.remove('hidden');
      gameOverScreen.classList.add('hidden');
      hud.classList.add('hidden');
      highScoreElement.textContent = gameState.highScore;
      break;
    case GameStatus.PLAYING:
      mainMenu.classList.add('hidden');
      gameOverScreen.classList.add('hidden');
      hud.classList.remove('hidden');
      scoreElement.textContent = gameState.score;
      highScoreElement.textContent = gameState.highScore;
      break;
    case GameStatus.GAME_OVER:
      mainMenu.classList.add('hidden');
      gameOverScreen.classList.remove('hidden');
      hud.classList.add('hidden');
      highScoreElement.textContent = gameState.highScore;
      break;
  }
}
