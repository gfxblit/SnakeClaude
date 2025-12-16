/**
 * @file The main entry point for the game.
 */

import './styles.css';
import { createGameState, GameStatus, moveSnake, checkCollision } from './game.js';
import { render } from './renderer.js';
import { handleInput } from './input.js';
import { renderUI } from './ui.js';
import { FRAME_RATE, SNAKE_SPEED_CELLS_PER_SECOND, SNAKE_SPEED_INCREMENT_INTERVAL_SCORE, SNAKE_SPEED_INCREMENT_AMOUNT, SNAKE_SPEED_MAX_CELLS_PER_SECOND } from './config.js';

let gameState = createGameState();
const canvas = document.getElementById('game-canvas');

function gameLoop() {
  if (gameState.status === GameStatus.PLAYING) {
    gameState.snakeMoveCounter++;

    // Calculate framesPerMove based on current speed
    const currentFramesPerMove = Math.round(FRAME_RATE / gameState.currentSnakeSpeedCellsPerSecond);

    if (gameState.snakeMoveCounter >= currentFramesPerMove) {
      moveSnake(gameState); // Move snake only when delay is met
      gameState.snakeMoveCounter = 0; // Reset counter

      if (checkCollision(gameState)) {
        gameState.status = GameStatus.GAME_OVER;
      }

      // Speed ramping logic: increase speed as score increases
      if (
        gameState.score > 0 &&
        gameState.score % SNAKE_SPEED_INCREMENT_INTERVAL_SCORE === 0 &&
        gameState.score > gameState.lastScoreForSpeedIncrease && // Only increase speed once per score interval
        gameState.currentSnakeSpeedCellsPerSecond < SNAKE_SPEED_MAX_CELLS_PER_SECOND
      ) {
        gameState.currentSnakeSpeedCellsPerSecond = Math.min(
          SNAKE_SPEED_MAX_CELLS_PER_SECOND,
          gameState.currentSnakeSpeedCellsPerSecond + SNAKE_SPEED_INCREMENT_AMOUNT
        );
        gameState.lastScoreForSpeedIncrease = gameState.score; // Update last score when speed was increased
      }
    }
    render(gameState, canvas);
  }

  renderUI(gameState);

  setTimeout(gameLoop, 1000 / FRAME_RATE);
}

handleInput(gameState);
gameLoop();
