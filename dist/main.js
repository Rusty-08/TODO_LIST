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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n\r\n\r\nclass Home {\r\n    static load() {\r\n        _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].restore()\r\n    }\r\n}\n\n//# sourceURL=webpack://todo_list/./src/components/home.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\r\nclass Project {\r\n    static projects = [];\r\n\r\n    constructor(title, desc, date, priority) {\r\n        this.title = title;\r\n        this.desc = desc;\r\n        this.date = date;\r\n        this.priority = priority;\r\n    }\r\n\r\n    static input() {\r\n        const title = document.getElementById('title').value || 'No title';\r\n        const desc = document.getElementById('desc').value || 'No description';\r\n        const date = document.getElementById('date').value || 'No date';\r\n        const radio = document.querySelector('input[name=\"priority\"]:checked');\r\n        const priorityColor = radio ? radio.value : 'green';\r\n\r\n        return new Project(title, desc, date, priorityColor);\r\n    }\r\n\r\n    static add() {\r\n        const newProject = Project.input()\r\n        Project.projects.push(newProject)\r\n        Project.setData()\r\n        Project.render()\r\n    }\r\n\r\n    static render() {\r\n        const projectContent = document.querySelector('.home-content')\r\n        const projectLists = document.querySelectorAll('.project')\r\n        projectLists.forEach(project => projectContent.removeChild(project))\r\n\r\n        for (const project of Project.projects) {\r\n            const card = createProjectCard(project)\r\n            projectContent.appendChild(card)\r\n        }\r\n\r\n        console.log(Project.projects)\r\n    }\r\n\r\n\r\n    static setData() {\r\n        localStorage.setItem('projects', JSON.stringify(Project.projects))\r\n    }\r\n\r\n    static restore() {\r\n        const storedProjects = JSON.parse(localStorage.getItem('projects'))\r\n        Project.projects = storedProjects\r\n        Project.render()\r\n    }\r\n}\r\n\r\nconst createProjectCard = (project) => {\r\n    const card = document.createElement('div')\r\n    card.className = 'card project shadow-sm'\r\n\r\n    const head = document.createElement('div')\r\n    head.className = 'd-flex align-items-start justify-content-between h-auto mb-2'\r\n\r\n    const priority = document.createElement('i')\r\n    priority.className = 'priority-icon fa-solid fa-check-double'\r\n    priority.style.color = project.priority\r\n\r\n    const date = document.createElement('p')\r\n    date.textContent = project.date\r\n\r\n    head.append(priority)\r\n    head.append(date)\r\n\r\n    const title = document.createElement('p')\r\n    title.textContent = project.title\r\n    title.className = 'fs-5 fw-medium mb-1'\r\n\r\n    const desc = document.createElement('span')\r\n    desc.textContent = project.desc\r\n    desc.className = 'project-desc'\r\n\r\n    card.append(head)\r\n    card.append(title)\r\n    card.append(desc)\r\n\r\n    return card\r\n}\n\n//# sourceURL=webpack://todo_list/./src/components/project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project */ \"./src/components/project.js\");\n\r\n\r\n\r\n//TODO Lists of nav links : Home, Today, This week and This month\r\n//TODO view/add projects in home page\r\n//TODO View all todos in project when clicked\r\n//TODO Display title, due date and color priority type in each todo\r\n//TODO Add edit todo functionality\r\n//TODO Add delete todo functionality\r\n//TODO Filter todos to display in today, this week and this month\r\n//TODO Add sorting by date and priority in home, today, this month and this month page\r\n\r\n\r\n\r\n\r\n\r\n\r\n// * ONLOAD\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    _components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load()\r\n\r\n    const addBtn = document.getElementById('addProject')\r\n    addBtn.addEventListener('click', _components_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add)\r\n\r\n    document.getElementById('year')\r\n        .textContent = new Date().getFullYear()\r\n})\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

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