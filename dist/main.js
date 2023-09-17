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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\r\nclass Project {\r\n\r\n    static projects = []\r\n\r\n    constructor(title, desc, date, priority) {\r\n        this.title = title\r\n        this.desc = desc\r\n        this.date = date\r\n        this.priority = priority\r\n    }\r\n\r\n    // * ADD PROJECT INPUT GETTER\r\n\r\n    static input() {\r\n        const title = document.getElementById('title').value || 'No title'\r\n        const desc = document.getElementById('desc').value || 'No description'\r\n        const date = document.getElementById('date').value || 'No date'\r\n        const radio = document.querySelector('input[name=\"priority\"]:checked')\r\n        const priorityColor = radio ? radio.value : 'green'\r\n\r\n        return new Project(title, desc, date, priorityColor)\r\n    }\r\n\r\n    static add() {\r\n        const newProject = Project.input()\r\n        Project.projects.push(newProject)\r\n        Project.setData()\r\n        Project.render()\r\n        console.log(newProject)\r\n    }\r\n\r\n    static render() {\r\n        const projectContent = document.querySelector('.home-content')\r\n        const projectLists = document.querySelectorAll('.project')\r\n        projectLists.forEach(project => projectContent.removeChild(project))\r\n\r\n        for (const project of Project.projects) {\r\n            const card = createProjectCard(project)\r\n            projectContent.appendChild(card)\r\n        }\r\n    }\r\n\r\n    static setData() {\r\n        localStorage.setItem('projects', JSON.stringify(Project.projects))\r\n    }\r\n\r\n    static restore() {\r\n        const storedProjects = JSON.parse(localStorage.getItem('projects')) || []\r\n        Project.projects = storedProjects\r\n        Project.render()\r\n    }\r\n\r\n    static remove(index) {\r\n        Project.projects.splice(index, 1)\r\n        Project.setData()\r\n        Project.render()\r\n    }\r\n\r\n    static editProject(index) {\r\n        const title = document.getElementById('title')\r\n        const desc = document.getElementById('desc')\r\n        const date = document.getElementById('date')\r\n        const radio = document.querySelector('input[name=\"priority\"]:checked')\r\n        const priorityColor = radio ? radio.value : 'green'\r\n\r\n        Project.projects[index].title = title.value\r\n        Project.projects[index].desc = desc.value\r\n        Project.projects[index].date = date.value\r\n        Project.projects[index].priority = priorityColor\r\n\r\n        Project.setData()\r\n        Project.render()\r\n    }\r\n\r\n    static displayDetails(index, isEditMode = false) {\r\n        const modalBtn = document.getElementById('projectModalButton')\r\n        const title = document.getElementById('title')\r\n        const desc = document.getElementById('desc')\r\n        const date = document.getElementById('date')\r\n        const radios = document.querySelectorAll('input[name=\"priority\"]')\r\n\r\n        if (isEditMode) {\r\n            title.value = Project.projects[index].title\r\n            desc.value = Project.projects[index].desc\r\n            date.value = Project.projects[index].date\r\n            let priorityValue = Project.projects[index].priority\r\n\r\n            radios.forEach(radio => {\r\n                radio.checked = radio.value === priorityValue\r\n            })\r\n\r\n            modalBtn.textContent = 'Save changes'\r\n            modalBtn.removeEventListener('click', Project.add)\r\n            modalBtn.addEventListener('click', () => Project.editProject(index))\r\n\r\n        } else {\r\n\r\n            modalBtn.removeEventListener('click', () => Project.editProject(index))\r\n            modalBtn.addEventListener('click', Project.add)\r\n        }\r\n    }\r\n\r\n    static resetForm() {\r\n        const form = document.getElementById('addProjectForm')\r\n        form.reset()\r\n    }\r\n}\r\n\r\n// * PROJECT CARD CREATION\r\n\r\nconst createProjectCard = (project) => {\r\n    const card = document.createElement('div')\r\n    card.className = 'card project shadow-sm'\r\n\r\n    const head = document.createElement('div')\r\n    head.className = 'd-flex align-items-start justify-content-between h-auto mb-2'\r\n\r\n    const priority = document.createElement('i')\r\n    priority.className = 'priority-icon fa-solid fa-check-double'\r\n    priority.style.color = project.priority\r\n\r\n    const date = document.createElement('p')\r\n    date.textContent = project.date\r\n\r\n    head.append(priority)\r\n    head.append(date)\r\n\r\n    const title = document.createElement('p')\r\n    title.textContent = project.title\r\n    title.className = 'fs-5 fw-medium mb-1'\r\n\r\n    const desc = document.createElement('span')\r\n    desc.textContent = project.desc\r\n    desc.className = 'project-desc'\r\n\r\n    const buttons = document.createElement('div')\r\n    buttons.className = 'd-flex justify-content-end gap-2 mt-2'\r\n\r\n    const edit = document.createElement('a')\r\n    edit.setAttribute('data-bs-toggle', 'modal')\r\n    edit.setAttribute('data-bs-target', '#projectModal')\r\n    edit.className = 'edit-project btn btn-outline-primary btn-sm opacity-75 text-decoration-none'\r\n    edit.innerHTML = '<i class=\"fa-regular fa-pen-to-square\"></i>'\r\n\r\n    const del = document.createElement('a')\r\n    del.className = 'btn remove-project btn-outline-danger btn-sm opacity-75 text-decoration-none'\r\n    del.innerHTML = '<i class=\"fa-regular fa-trash-can\"></i>'\r\n\r\n    // * DELETE BUTTON\r\n\r\n    del.addEventListener('click', () => {\r\n        Project.remove(Project.projects.indexOf(project))\r\n    })\r\n\r\n    // * EDIT BUTTON\r\n\r\n    edit.addEventListener('click', () => {\r\n        Project.displayDetails(Project.projects.indexOf(project), true)\r\n    })\r\n\r\n    buttons.appendChild(edit)\r\n    buttons.appendChild(del)\r\n\r\n    card.append(head)\r\n    card.append(title)\r\n    card.append(desc)\r\n    card.append(buttons)\r\n\r\n    return card\r\n}\n\n//# sourceURL=webpack://todo_list/./src/components/project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project */ \"./src/components/project.js\");\n\r\n\r\n\r\n//TODO Lists of nav links : Home, Today, This week and This month\r\n//TODO view/add projects in home page\r\n//TODO View all todos in project when clicked\r\n//TODO Display title, due date and color priority type in each todo\r\n//TODO Add edit todo functionality\r\n//TODO Add delete todo functionality\r\n//TODO Filter todos to display in today, this week and this month\r\n//TODO Add sorting by date and priority in home, today, this month and this month page\r\n\r\nconst addProjectBtn = document.getElementById('addProjectBtn')\r\nconst modalBtn = document.getElementById('projectModalButton')\r\n\r\naddProjectBtn.addEventListener('click', () => {\r\n    _components_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetForm()\r\n    modalBtn.textContent = 'Add project'\r\n    _components_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayDetails()\r\n})\r\n\r\n// * ONLOAD\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\r\n    _components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load()\r\n\r\n    document.getElementById('year')\r\n        .textContent = new Date().getFullYear()\r\n})\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

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