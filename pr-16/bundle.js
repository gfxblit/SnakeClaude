/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f0f0f0;\n  position: relative;\n}\n\n#game-canvas {\n  border: 1px solid black;\n  background-color: #fff;\n}\n\n.screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  text-align: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.title {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n.blink {\n  animation: blink-animation 1s steps(2, start) infinite;\n}\n\n@keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snakeclaude/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://snakeclaude/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://snakeclaude/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://snakeclaude/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://snakeclaude/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://snakeclaude/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://snakeclaude/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://snakeclaude/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://snakeclaude/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/config.js"
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CANVAS_HEIGHT: () => (/* binding */ CANVAS_HEIGHT),\n/* harmony export */   CANVAS_WIDTH: () => (/* binding */ CANVAS_WIDTH),\n/* harmony export */   FOOD_COLOR: () => (/* binding */ FOOD_COLOR),\n/* harmony export */   FRAME_RATE: () => (/* binding */ FRAME_RATE),\n/* harmony export */   GRID_SIZE: () => (/* binding */ GRID_SIZE),\n/* harmony export */   SNAKE_COLOR: () => (/* binding */ SNAKE_COLOR),\n/* harmony export */   SNAKE_SPEED_CELLS_PER_SECOND: () => (/* binding */ SNAKE_SPEED_CELLS_PER_SECOND),\n/* harmony export */   SNAKE_SPEED_INCREMENT_AMOUNT: () => (/* binding */ SNAKE_SPEED_INCREMENT_AMOUNT),\n/* harmony export */   SNAKE_SPEED_INCREMENT_INTERVAL_SCORE: () => (/* binding */ SNAKE_SPEED_INCREMENT_INTERVAL_SCORE),\n/* harmony export */   SNAKE_SPEED_MAX_CELLS_PER_SECOND: () => (/* binding */ SNAKE_SPEED_MAX_CELLS_PER_SECOND)\n/* harmony export */ });\n/**\n * @file Contains game configuration settings.\n */\n\nconst GRID_SIZE = 20;\nconst CANVAS_WIDTH = GRID_SIZE * 20;\nconst CANVAS_HEIGHT = GRID_SIZE * 20;\nconst FOOD_COLOR = 'red';\nconst SNAKE_COLOR = 'green';\nconst FRAME_RATE = 5; // frames per second\n\n\nconst SNAKE_SPEED_CELLS_PER_SECOND = 2; // Snake moves 2 grid cells per second\nconst SNAKE_SPEED_INCREMENT_INTERVAL_SCORE = 1; // Increase speed every x points\nconst SNAKE_SPEED_INCREMENT_AMOUNT = 1; // Increase speed by x cells/sec\nconst SNAKE_SPEED_MAX_CELLS_PER_SECOND = 10; // Maximum snake speed\n\n\n//# sourceURL=webpack://snakeclaude/./src/config.js?\n}");

/***/ },

/***/ "./src/game.js"
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Direction: () => (/* binding */ Direction),\n/* harmony export */   DirectionVector: () => (/* binding */ DirectionVector),\n/* harmony export */   GameStatus: () => (/* binding */ GameStatus),\n/* harmony export */   checkCollision: () => (/* binding */ checkCollision),\n/* harmony export */   createGameState: () => (/* binding */ createGameState),\n/* harmony export */   generateFood: () => (/* binding */ generateFood),\n/* harmony export */   getNewDirection: () => (/* binding */ getNewDirection),\n/* harmony export */   moveSnake: () => (/* binding */ moveSnake),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/**\n * @file Manages the core game logic and state.\n */\n\n\nconst HIGH_SCORE_KEY = 'snakeHighScore';\n/**\n * Represents the different states of the game.\n * @enum {string}\n */\nconst GameStatus = Object.freeze({\n    MAIN_MENU: \"MainMenu\",\n    PLAYING: \"Playing\",\n    GAME_OVER: \"GameOver\",\n});\n/**\n * Represents the directions.\n * @enum {string}\n */\nconst Direction = Object.freeze({\n    UP: \"Up\",\n    DOWN: \"Down\",\n    LEFT: \"Left\",\n    RIGHT: \"Right\",\n});\n/**\n * Maps directions to coordinate changes.\n * @type {object}\n */\nconst DirectionVector = Object.freeze({\n    [Direction.UP]: { x: 0, y: -1 },\n    [Direction.DOWN]: { x: 0, y: 1 },\n    [Direction.LEFT]: { x: -1, y: 0 },\n    [Direction.RIGHT]: { x: 1, y: 0 },\n});\n/**\n * Creates the initial game state.\n * @returns {object} The initial game state.\n */\nfunction createGameState() {\n    const storedHighScore = localStorage.getItem(HIGH_SCORE_KEY);\n    const highScore = storedHighScore ? parseInt(storedHighScore, 10) : 0;\n\n    return {\n        snake: {\n            body: [{ x: 10, y: 10 }],\n            direction: Direction.RIGHT, // Use the Direction enum\n        },\n        food: [{ x: 5, y: 5 }], // This will be replaced by generateFood in startGame\n        score: 0,\n        highScore: highScore,\n        status: GameStatus.MAIN_MENU,\n        framesPerMove: Math.round(_config_js__WEBPACK_IMPORTED_MODULE_0__.FRAME_RATE / _config_js__WEBPACK_IMPORTED_MODULE_0__.SNAKE_SPEED_CELLS_PER_SECOND), // Initial frames per snake movement\n        currentSnakeSpeedCellsPerSecond: _config_js__WEBPACK_IMPORTED_MODULE_0__.SNAKE_SPEED_CELLS_PER_SECOND, // Initial speed in cells per second\n        snakeMoveCounter: 0, // Counter for snake movement\n        lastScoreForSpeedIncrease: 0, // Track score when speed was last increased\n    };\n}\n/**\n * Calculates the new direction based on the current direction and a turn input.\n * @param {string} currentDirection The snake's current direction (from Direction enum).\n * @param {string} turn The turn input ('LEFT' or 'RIGHT').\n * @returns {string} The new direction (from Direction enum).\n */\nfunction getNewDirection(currentDirection, turn) {\n    const directions = [\n        Direction.UP,\n        Direction.RIGHT,\n        Direction.DOWN,\n        Direction.LEFT,\n    ];\n    const currentIndex = directions.indexOf(currentDirection);\n    if (turn === \"LEFT\") {\n        return directions[(currentIndex + directions.length - 1) % directions.length];\n    } else if (turn === \"RIGHT\") {\n        return directions[(currentIndex + 1) % directions.length];\n    }\n    return currentDirection; // Should not happen\n}\n/**\n * Starts or restarts the game.\n * @param {object} gameState The current game state.\n */\nfunction startGame(gameState) {\n    gameState.status = GameStatus.PLAYING;\n    gameState.snake = {\n        body: [{ x: 10, y: 10 }],\n        direction: Direction.RIGHT,\n    };\n    gameState.food = [generateFood(gameState)];\n    gameState.score = 0;\n    gameState.framesPerMove = Math.round(_config_js__WEBPACK_IMPORTED_MODULE_0__.FRAME_RATE / _config_js__WEBPACK_IMPORTED_MODULE_0__.SNAKE_SPEED_CELLS_PER_SECOND); // Reset frames per move\n    gameState.currentSnakeSpeedCellsPerSecond = _config_js__WEBPACK_IMPORTED_MODULE_0__.SNAKE_SPEED_CELLS_PER_SECOND; // Reset speed in cells per second\n    gameState.snakeMoveCounter = 0; // Reset counter on new game\n    gameState.lastScoreForSpeedIncrease = 0; // Reset on new game\n}\n/**\n * Moves the snake and handles game logic like eating food.\n * @param {object} gameState The current game state.\n */\nfunction moveSnake(gameState) {\n    const { snake, food } = gameState;\n    const vector = DirectionVector[snake.direction];\n    const head = snake.body[0];\n    const newHead = { x: head.x + vector.x, y: head.y + vector.y };\n    const ateFood = food.some(\n        (foodItem) => foodItem.x === newHead.x && foodItem.y === newHead.y\n    );\n    if (ateFood) {\n        gameState.score += 1;\n        gameState.food = [generateFood(gameState)]; // Generate new food\n    }\n    snake.body.unshift(newHead); // Add new head\n    if (!ateFood) {\n        snake.body.pop(); // Remove tail\n    }\n}\n/**\n * Checks for collisions with walls or the snake's own body.\n * @param {object} gameState The current game state.\n * @returns {boolean} True if a collision occurred, false otherwise.\n */\nfunction checkCollision(gameState) {\n    const { snake } = gameState;\n    const head = snake.body[0];\n    let collisionOccurred = false;\n\n    // Wall collision\n    if (\n        head.x < 0 ||\n        head.x >= _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE ||\n        head.y < 0 ||\n        head.y >= _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE\n    ) {\n        collisionOccurred = true;\n    }\n\n    // Self collision\n    for (let i = 1; i < snake.body.length; i++) {\n        if (head.x === snake.body[i].x && head.y === snake.body[i].y) {\n            collisionOccurred = true;\n            break; // No need to check further after self-collision\n        }\n    }\n\n    if (collisionOccurred) {\n        if (gameState.score > gameState.highScore) {\n            gameState.highScore = gameState.score;\n            localStorage.setItem(HIGH_SCORE_KEY, gameState.highScore.toString());\n        }\n        return true;\n    }\n\n    return false;\n}\n/**\n * Generates a new food item at a random position.\n * @param {object} gameState The current game state, used to avoid placing food on the snake.\n * @returns {object} The new food item with x and y coordinates.\n */\nfunction generateFood(gameState) {\n    let foodPosition;\n    do {\n        foodPosition = {\n            x: Math.floor(Math.random() * _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE),\n            y: Math.floor(Math.random() * _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE),\n        };\n    } while (\n        gameState.snake.body.some(\n            (segment) =>\n                segment.x === foodPosition.x && segment.y === foodPosition.y\n        )\n    );\n    return foodPosition;\n}\n\n\n//# sourceURL=webpack://snakeclaude/./src/game.js?\n}");

/***/ },

/***/ "./src/input.js"
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleInput: () => (/* binding */ handleInput)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n/**\n * @file Handles player input.\n */\n\n/**\n * Sets up input handling for the game.\n * @param {object} gameState The game state to modify based on input.\n * @returns {function} A function to remove the event listener.\n */\nfunction handleInput(gameState) {\n  const handleKeyDown = (e) => {\n    switch (gameState.status) {\n      case _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.MAIN_MENU:\n      case _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.GAME_OVER:\n        if (e.key === 'Enter') {\n          (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.startGame)(gameState);\n        }\n        break;\n      case _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.PLAYING:\n        switch (e.key) {\n          case 'ArrowLeft':\n            gameState.snake.direction = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.getNewDirection)(gameState.snake.direction, 'LEFT');\n            break;\n          case 'ArrowRight':\n            gameState.snake.direction = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.getNewDirection)(gameState.snake.direction, 'RIGHT');\n            break;\n        }\n        break;\n    }\n  };\n\n  document.addEventListener('keydown', handleKeyDown);\n\n  let touchStartX = 0;\n  let touchStartY = 0;\n\n  const handleTouchStart = (e) => {\n    if (gameState.status !== _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.PLAYING) return;\n    touchStartX = e.touches[0].clientX;\n    touchStartY = e.touches[0].clientY;\n  };\n\n  const handleTouchEnd = (e) => {\n    if (gameState.status !== _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.PLAYING) return;\n    const touchEndX = e.changedTouches[0].clientX;\n    const touchEndY = e.changedTouches[0].clientY;\n\n    const dx = touchEndX - touchStartX;\n    const dy = touchEndY - touchStartY;\n\n    if (Math.abs(dx) > Math.abs(dy)) {\n      // Horizontal swipe\n      if (dx > 0) { // Swipe Right\n        gameState.snake.direction = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.getNewDirection)(gameState.snake.direction, 'RIGHT');\n      } else if (dx < 0) { // Swipe Left\n        gameState.snake.direction = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.getNewDirection)(gameState.snake.direction, 'LEFT');\n      }\n    }\n  };\n\n  document.addEventListener('touchstart', handleTouchStart);\n  document.addEventListener('touchend', handleTouchEnd);\n\n  // Handle Enter key for main menu and game over on touch devices\n  const handleTouchTap = (e) => {\n    if (gameState.status === _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.MAIN_MENU || gameState.status === _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.GAME_OVER) {\n      (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.startGame)(gameState);\n    }\n  };\n\n  document.addEventListener('touchend', handleTouchTap);\n\n\n  return () => {\n    document.removeEventListener('keydown', handleKeyDown);\n    document.removeEventListener('touchstart', handleTouchStart);\n    document.removeEventListener('touchend', handleTouchEnd);\n    document.removeEventListener('touchend', handleTouchTap);\n  };\n}\n\n//# sourceURL=webpack://snakeclaude/./src/input.js?\n}");

/***/ },

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer.js */ \"./src/renderer.js\");\n/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.js */ \"./src/input.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/**\n * @file The main entry point for the game.\n */\n\n\n\n\n\n\n\n\nlet gameState = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.createGameState)();\nconst canvas = document.getElementById('game-canvas');\n\nfunction gameLoop() {\n  if (gameState.status === _game_js__WEBPACK_IMPORTED_MODULE_1__.GameStatus.PLAYING) {\n    gameState.snakeMoveCounter++;\n\n    // Calculate framesPerMove based on current speed\n    const currentFramesPerMove = Math.round(_config_js__WEBPACK_IMPORTED_MODULE_5__.FRAME_RATE / gameState.currentSnakeSpeedCellsPerSecond);\n\n    if (gameState.snakeMoveCounter >= currentFramesPerMove) {\n      (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.moveSnake)(gameState); // Move snake only when delay is met\n      gameState.snakeMoveCounter = 0; // Reset counter\n\n      if ((0,_game_js__WEBPACK_IMPORTED_MODULE_1__.checkCollision)(gameState)) {\n        gameState.status = _game_js__WEBPACK_IMPORTED_MODULE_1__.GameStatus.GAME_OVER;\n      }\n\n      // Speed ramping logic: increase speed as score increases\n      if (\n        gameState.score > 0 &&\n        gameState.score % _config_js__WEBPACK_IMPORTED_MODULE_5__.SNAKE_SPEED_INCREMENT_INTERVAL_SCORE === 0 &&\n        gameState.score > gameState.lastScoreForSpeedIncrease && // Only increase speed once per score interval\n        gameState.currentSnakeSpeedCellsPerSecond < _config_js__WEBPACK_IMPORTED_MODULE_5__.SNAKE_SPEED_MAX_CELLS_PER_SECOND\n      ) {\n        gameState.currentSnakeSpeedCellsPerSecond = Math.min(\n          _config_js__WEBPACK_IMPORTED_MODULE_5__.SNAKE_SPEED_MAX_CELLS_PER_SECOND,\n          gameState.currentSnakeSpeedCellsPerSecond + _config_js__WEBPACK_IMPORTED_MODULE_5__.SNAKE_SPEED_INCREMENT_AMOUNT\n        );\n        gameState.lastScoreForSpeedIncrease = gameState.score; // Update last score when speed was increased\n      }\n    }\n    (0,_renderer_js__WEBPACK_IMPORTED_MODULE_2__.render)(gameState, canvas);\n  }\n\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_4__.renderUI)(gameState);\n\n  setTimeout(gameLoop, 1000 / _config_js__WEBPACK_IMPORTED_MODULE_5__.FRAME_RATE);\n}\n\n(0,_input_js__WEBPACK_IMPORTED_MODULE_3__.handleInput)(gameState);\ngameLoop();\n\n\n//# sourceURL=webpack://snakeclaude/./src/main.js?\n}");

/***/ },

/***/ "./src/renderer.js"
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/**\n * @file Renders the game state on the canvas.\n */\n\n\n\n/**\n * Renders the game state on the canvas.\n * @param {object} gameState The current game state.\n * @param {HTMLCanvasElement} canvas The canvas element to draw on.\n */\nfunction render(gameState, canvas) {\n  const context = canvas.getContext('2d');\n\n  // Clear canvas\n  context.clearRect(0, 0, canvas.width, canvas.height);\n\n  // Set canvas dimensions based on grid size\n  canvas.width = _config_js__WEBPACK_IMPORTED_MODULE_0__.CANVAS_WIDTH;\n  canvas.height = _config_js__WEBPACK_IMPORTED_MODULE_0__.CANVAS_HEIGHT;\n\n\n  // Draw food\n  context.fillStyle = _config_js__WEBPACK_IMPORTED_MODULE_0__.FOOD_COLOR;\n  gameState.food.forEach(foodItem => {\n    context.fillRect(foodItem.x * _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE, foodItem.y * _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE, _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE, _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE);\n  });\n\n  // Draw snake\n  context.fillStyle = _config_js__WEBPACK_IMPORTED_MODULE_0__.SNAKE_COLOR;\n  gameState.snake.body.forEach(segment => {\n    context.fillRect(segment.x * _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE, segment.y * _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE, _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE, _config_js__WEBPACK_IMPORTED_MODULE_0__.GRID_SIZE);\n  });\n}\n\n\n//# sourceURL=webpack://snakeclaude/./src/renderer.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://snakeclaude/./src/styles.css?\n}");

/***/ },

/***/ "./src/ui.js"
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameOverHighScoreElement: () => (/* binding */ gameOverHighScoreElement),\n/* harmony export */   gameOverScreen: () => (/* binding */ gameOverScreen),\n/* harmony export */   hud: () => (/* binding */ hud),\n/* harmony export */   hudHighScoreElement: () => (/* binding */ hudHighScoreElement),\n/* harmony export */   mainMenu: () => (/* binding */ mainMenu),\n/* harmony export */   mainMenuHighScoreElement: () => (/* binding */ mainMenuHighScoreElement),\n/* harmony export */   renderUI: () => (/* binding */ renderUI),\n/* harmony export */   scoreElement: () => (/* binding */ scoreElement)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/**\n * @file Manages the UI elements.\n */\n\n\n\nconst mainMenu = document.getElementById('main-menu');\nconst gameOverScreen = document.getElementById('game-over');\nconst hud = document.getElementById('ui');\nconst scoreElement = document.getElementById('score');\nconst mainMenuHighScoreElement = document.getElementById('main-menu-high-score');\nconst hudHighScoreElement = document.getElementById('hud-high-score');\nconst gameOverHighScoreElement = document.getElementById('game-over-high-score');\n\n/**\n * Renders the UI based on the game state.\n * @param {object} gameState The current game state.\n */\nfunction renderUI(gameState) {\n  mainMenuHighScoreElement.textContent = gameState.highScore;\n  hudHighScoreElement.textContent = gameState.highScore;\n  gameOverHighScoreElement.textContent = gameState.highScore;\n\n  switch (gameState.status) {\n    case _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.MAIN_MENU:\n      mainMenu.classList.remove('hidden');\n      gameOverScreen.classList.add('hidden');\n      hud.classList.add('hidden');\n      break;\n    case _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.PLAYING:\n      mainMenu.classList.add('hidden');\n      gameOverScreen.classList.add('hidden');\n      hud.classList.remove('hidden');\n      scoreElement.textContent = gameState.score;\n      break;\n    case _game_js__WEBPACK_IMPORTED_MODULE_0__.GameStatus.GAME_OVER:\n      mainMenu.classList.add('hidden');\n      gameOverScreen.classList.remove('hidden');\n      hud.classList.add('hidden');\n      break;\n  }\n}\n\n\n//# sourceURL=webpack://snakeclaude/./src/ui.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;