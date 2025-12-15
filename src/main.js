/**
 * @file The main entry point for the game.
 */

import './styles.css';
import { createGameState, GameStatus } from './game.js';
import { render } from './renderer.js';
import { handleInput } from './input.js';
import { updateUI } from './ui.js';
import { GAME_SPEED } from './config.js';

let gameState = createGameState();
const canvas = document.getElementById('game-canvas');

function gameLoop() {
  if (gameState.status === GameStatus.PLAYING) {
    // Game logic will go here
  }

  render(gameState, canvas);
  updateUI(gameState);

  setTimeout(gameLoop, 1000 / GAME_SPEED);
}

handleInput(gameState);
gameLoop();
