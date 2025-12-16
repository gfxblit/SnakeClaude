/**
 * @file The main entry point for the game.
 */

import './styles.css';
import { createGameState, GameStatus, moveSnake, checkCollision, updateGameStateOnGameOver } from './game.js';
import { render } from './renderer.js';
import { handleInput } from './input.js';
import { renderUI } from './ui.js';
import { FRAME_RATE } from './config.js';

let gameState = createGameState();
const canvas = document.getElementById('game-canvas');

function gameLoop() {
  if (gameState.status === GameStatus.PLAYING) {
    moveSnake(gameState);
    if (checkCollision(gameState)) {
      updateGameStateOnGameOver(gameState);
    }
    render(gameState, canvas);
  }

  renderUI(gameState);

  setTimeout(gameLoop, 1000 / FRAME_RATE);
}

handleInput(gameState);
gameLoop();
