/**
 * @file The main entry point for the game.
 */

import './styles.css';
import { createGameState, GameStatus, moveSnake, checkCollision } from './game.js';
import { render } from './renderer.js';
import { handleInput } from './input.js';
import { renderUI } from './ui.js';
import { FRAME_RATE, GAME_SPEED_MIN_DELAY_FRAMES, GAME_SPEED_DECREMENT_INTERVAL, GAME_SPEED_DECREMENT_AMOUNT } from './config.js';

let gameState = createGameState();
const canvas = document.getElementById('game-canvas');

function gameLoop() {
  if (gameState.status === GameStatus.PLAYING) {
    gameState.snakeMoveCounter++;

    if (gameState.snakeMoveCounter >= gameState.currentSnakeSpeedDelay) {
      moveSnake(gameState); // Move snake only when delay is met
      gameState.snakeMoveCounter = 0; // Reset counter

      if (checkCollision(gameState)) {
        gameState.status = GameStatus.GAME_OVER;
      }

      // Speed ramping logic: decrease delay as score increases
      if (
        gameState.score > 0 &&
        gameState.score % GAME_SPEED_DECREMENT_INTERVAL === 0 &&
        gameState.score > gameState.lastScoreForSpeedDecrease && // Only decrease speed once per score interval
        gameState.currentSnakeSpeedDelay > GAME_SPEED_MIN_DELAY_FRAMES
      ) {
        gameState.currentSnakeSpeedDelay = Math.max(
          GAME_SPEED_MIN_DELAY_FRAMES,
          gameState.currentSnakeSpeedDelay - GAME_SPEED_DECREMENT_AMOUNT
        );
        gameState.lastScoreForSpeedDecrease = gameState.score; // Update last score when speed was decreased
      }
    }
    render(gameState, canvas);
  }

  renderUI(gameState);

  setTimeout(gameLoop, 1000 / FRAME_RATE);
}

handleInput(gameState);
gameLoop();
