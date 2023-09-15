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

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n\r\n\r\nfunction loadHomePage() {\r\n    const homeContent = document.querySelector('.home-content')\r\n    const addBtn = document.getElementById('addProject')\r\n    const addForm = document.getElementById('addProjectForm')\r\n\r\n    addBtn.addEventListener('click', () => {\r\n        homeContent.appendChild((0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n        addForm.reset()\r\n    })\r\n}\n\n//# sourceURL=webpack://todo_list/./src/components/home.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\n\r\n// export class Project {\r\n//     constructor() {\r\n//         this.title = title\r\n//         this.desc = desc\r\n//         this.dueDate = dueDate\r\n//         this.priority = priority\r\n//     }\r\n\r\n//     static add() {\r\n//         return createProject(\r\n//             this.title,\r\n//             this.desc,\r\n//             this.dueDate,\r\n//             this.priority\r\n//         )\r\n//     }\r\n// }\r\n\r\n// * test project creation\r\n\r\nconst createProject = (titleValue, descValue, dateValue, priorityColor) => {\r\n    const card = document.createElement('div')\r\n    const title = document.createElement('p')\r\n    const desc = document.createElement('span')\r\n    const date = document.createElement('p')\r\n    const priority = document.createElement('i')\r\n    const head = document.createElement('div')\r\n\r\n\r\n    priority.className = 'priority-icon fa-solid fa-check-double'\r\n    priority.style.color = priorityColor\r\n\r\n    date.textContent = dateValue\r\n\r\n    head.className = 'd-flex align-items-start justify-content-between h-auto mb-2'\r\n    head.appendChild(priority)\r\n    head.appendChild(date)\r\n\r\n    title.textContent = titleValue\r\n    title.className = 'fs-5 fw-medium mb-1'\r\n\r\n    desc.textContent = descValue\r\n    desc.className = 'project-desc'\r\n\r\n    card.appendChild(head)\r\n    card.appendChild(title)\r\n    card.appendChild(desc)\r\n\r\n    card.className = 'card project shadow-sm'\r\n\r\n    return card\r\n}\r\n\r\nfunction project() {\r\n    const title = document.getElementById('title').value || 'No title'\r\n    const desc = document.getElementById('desc').value || 'No description'\r\n    const date = document.getElementById('date').value || 'No date'\r\n    const radio = document.querySelector('input[name=\"priority\"]:checked')\r\n\r\n    const priorityColor = radio ? radio.value : 'green'\r\n\r\n    return createProject(title, desc, date, priorityColor)\r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./src/components/project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n\r\n\r\n\r\n//TODO Lists of nav links : Home, Today, This week and This month\r\n//TODO view/add projects in home page\r\n//TODO View all todos in project when clicked\r\n//TODO Display title, due date and color priority type in each todo\r\n//TODO Add edit todo functionality\r\n//TODO Add delete todo functionality\r\n//TODO Filter todos to display in today, this week and this month\r\n//TODO Add sorting by date and priority in home, today, this month and this month page\r\n\r\n\r\n\r\n\r\n\r\n\r\n// * ONLOAD\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n    (0,_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    // Display year in footer\r\n\r\n    document.getElementById('year')\r\n        .textContent = new Date().getFullYear()\r\n})\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;