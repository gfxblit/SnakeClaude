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

function gameLoop() {
  if (gameState.status === GameStatus.PLAYING) {
    moveSnake(gameState);
    if (checkCollision(gameState)) {
      gameState.status = GameStatus.GAME_OVER;
    }
  }

  render(gameState, canvas);
  updateUI(gameState);

  setTimeout(gameLoop, 1000 / FRAME_RATE);
}

handleInput(gameState);
gameLoop();
