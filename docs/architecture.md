# Architecture

This document describes the architecture of the SnakeClaude game. The architecture is designed to be simple, modular, and testable.

## High Level Architecture

The game follows a modular architecture with a clear separation of concerns. The core components of the game are:

- **Game Logic**: Encapsulates the rules of the game, such as moving the snake, detecting collisions, and managing the food.
- **Game State**: Manages the current state of the game, including the snake's position, the food's position, and the score.
- **Rendering**: Responsible for drawing the game state on the screen.
- **Player Input**: Handles input from the player to control the snake.
- **Main**: The entry point of the application, responsible for initializing the game and managing the game loop.
- **UI**: Responsible for updating the UI elements, such as the score.

## Project Structure

The project will be organized into the following files:

- `index.html`: The main HTML file for the game.
- `styles.css`: The CSS file for styling the game.
- `main.js`: The entry point of the application.
- `config.js`: Contains the configuration for the game, such as the size of the grid and the speed of the snake.
- `game.js`: Implements the core game logic.
- `renderer.js`: Renders the game on the canvas.
- `input.js`: Handles player input.
- `ui.js`: Manages the UI.

## Game State Management

The game state will be managed in a central `game.js` module. This module will expose functions to modify the game state, and the other modules will call these functions to update the state.

## Player Input

Player input will be handled by the `input.js` module. This module will listen for keyboard/touch events and update the direction of the snake in the game state.

## Rendering

The game will be rendered on an HTML5 canvas. The `renderer.js` module will be responsible for drawing the game state on the canvas.

## Testing

The project will use [Jest](https://jestjs.io/) for unit and integration testing. All new features and bug fixes must be accompanied by tests, following a Test-Driven Development (TDD) workflow.

- **End-to-End Testing (Puppeteer)**: Puppeteer will be utilized for end-to-end testing to simulate user interactions and capture screenshots.

## Programming Language and Environment

- **Programming Language**: Vanilla JavaScript (ES6 modules)
- **Environment**: Node.js for development and testing.
- **Dependencies**: No framework dependencies for the core game logic. Jest will be used for testing.
