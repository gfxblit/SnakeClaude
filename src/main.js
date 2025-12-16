/**
 * @file The main entry point for the game.
 */

import './styles.css';
import { createGameState, GameStatus, moveSnake, checkCollision } from './game.js';
import { render } from './renderer.js';
import { handleInput } from './input.js';
import { updateUI } from './ui.js';
import { FRAME_RATE } from './config.js';

let gameState = createGameState();
const canvas = document.getElementById('game-canvas');

function restartGame() {
  gameState = createGameState();
  gameState.status = GameStatus.PLAYING;
  gameLoop();
}

function gameLoop() {
  if (gameState.status === GameStatus.PLAYING) {
    moveSnake(gameState);
  }

  render(gameState, canvas);
  updateUI(gameState, restartGame);

  setTimeout(gameLoop, 1000 / FRAME_RATE);
}

handleInput(gameState);
gameLoop();
