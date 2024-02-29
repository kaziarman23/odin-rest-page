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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home_page() {\r\n    const content = document.querySelector(\"#content\");\r\n    const page_content = document.createElement(\"div\");\r\n\r\n    const headling = document.createElement(\"h1\");\r\n    headling.textContent =\r\n        \"our restaurant is the best restuarant! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper. Sit amet cursus sit amet dictum sit. Odio ut sem nulla pharetra diam sit amet nisl. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Porta non pulvinar neque laoreet suspendisse. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et odio pellentesque diam volutpat commodo.\";\r\n\r\n    page_content.setAttribute(\"ID\", \"home_page_text\");\r\n    page_content.appendChild(headling);\r\n    content.appendChild(page_content);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home_page);\r\n\n\n//# sourceURL=webpack://selfbuild/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\ninit();\r\nconst content = document.querySelector(\"#content\")\r\nconst home_btn = document.querySelector(\".home_btn\")\r\nconst menu_btn = document.querySelector(\".menu_btn\")\r\n\r\n\r\nhome_btn.addEventListener(\"click\", function(){\r\n    clear_page();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})\r\n\r\nmenu_btn.addEventListener(\"click\", function(){\r\n    clear_page();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\r\n\r\n\r\nfunction clear_page(){\r\n    content.textContent = \"\";\r\n}\r\n\r\n\r\n\r\nfunction init(){\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://selfbuild/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu_page() {\r\n    const content = document.querySelector(\"#content\");\r\n    const page_contener = document.createElement(\"div\");\r\n    const page_content1 = document.createElement(\"p\");\r\n    const page_content2 = document.createElement(\"p\");\r\n    const page_content3 = document.createElement(\"p\");\r\n    const page_content4 = document.createElement(\"p\");\r\n\r\n    // creating menu list\r\n    const menuList = document.createElement(\"ul\");\r\n    menuList.textContent = \"Our Menu:\";\r\n    menuList.style.backgroundColor = \"gold\";\r\n    menuList.style.color = \"black\";\r\n    menuList.style.textAlign = \"center\";\r\n    page_contener.appendChild(menuList);\r\n    const menuItem1 = document.createElement(\"li\");\r\n    menuItem1.textContent = \"Ukrainian Red Borscht Soup\";\r\n    page_content1.appendChild(menuItem1);\r\n    const menuItem2 = document.createElement(\"li\");\r\n    menuItem2.textContent = \"Eggplant Caponata\";\r\n    page_content2.appendChild(menuItem2);\r\n    const menuItem3 = document.createElement(\"li\");\r\n    menuItem3.textContent = \"Caprese Salad with Balsamic Reduction\";\r\n    page_content3.appendChild(menuItem3);\r\n    const menuItem4 = document.createElement(\"li\");\r\n    menuItem4.textContent = \"Beet Salad with Goat Cheese\";\r\n    page_content4.appendChild(menuItem4);\r\n\r\n    page_contener.appendChild(menuItem1);\r\n    page_contener.appendChild(menuItem2);\r\n    page_contener.appendChild(menuItem3);\r\n    page_contener.appendChild(menuItem4);\r\n    content.appendChild(page_contener);\r\n\r\n    page_contener.setAttribute(\"id\", \"contact_page_menu\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu_page);\r\n\n\n//# sourceURL=webpack://selfbuild/./src/menu.js?");

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