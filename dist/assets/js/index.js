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

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://campie/./src/assets/css/main.css?\n}");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/assets/css/main.css\");\n\n\n// active color btn\nconst listItems = document.querySelectorAll(\".tabs li\");\nconst itemsArray = Array.from(listItems);\nconst lightPages = document.querySelectorAll(\".lightPages\");\nconst darkPages = document.querySelectorAll(\".darkPages\");\n\n// added active color and toggle dark and light\nitemsArray.forEach((item) => {\n    item.addEventListener(\"click\", () => {\n        itemsArray.forEach((item) => {\n            item.classList.remove(\"active\");\n        });\n        item.classList.add(\"active\");\n        const activeItem = document.querySelector(\".tabs li.active\");\n        if (activeItem) {\n            if (activeItem.innerText.trim() === \"Dark\") {\n                lightPages.forEach((page) => {\n                    page.classList.add(\"hidden\");\n                });\n                darkPages.forEach((page) => {\n                    page.classList.remove(\"hidden\");\n                });\n            }\n            else {\n                lightPages.forEach((page) => {\n                    page.classList.remove(\"hidden\");\n                });\n                darkPages.forEach((page) => {\n                    page.classList.add(\"hidden\");\n                });\n            }\n        }\n    });\n});\n\n\n// handle mobile menu\nconst toggleMenu = document.getElementById(\"toggle-menu\");\nconst dropDown = document.getElementById(\"drop-down\");\nconst label = document.querySelector('label[for=\"toggle-menu\"]');\n\n// Handle open/close\ntoggleMenu.addEventListener(\"change\", () => {\n    if (toggleMenu.checked) {\n        dropDown.classList.remove(\"hidden\");\n    } else {\n        dropDown.classList.add(\"hidden\");\n    }\n});\nlabel.addEventListener(\"click\", (e) => {\n    e.stopPropagation();\n});\nwindow.addEventListener(\"click\", (e) => {\n    if (!label.contains(e.target) && !dropDown.contains(e.target)) {\n        dropDown.classList.add(\"hidden\");\n        toggleMenu.checked = false;\n    }\n});\n\n\n// hero banner background animation\nconst canvas = document.getElementById(\"starCanvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nfunction resizeCanvas() {\n    canvas.width = canvas.offsetWidth;\n    canvas.height = canvas.offsetHeight;\n}\nresizeCanvas();\n\nlet stars = [];\nconst STAR_COUNT = 250;\n\nfunction createStars() {\n    stars = [];\n    for (let i = 0; i < STAR_COUNT; i++) {\n        stars.push({\n            x: Math.random() * canvas.width,\n            y: Math.random() * canvas.height,\n            size: Math.random() * 2 + 0.5,\n            speed: 0.3 + Math.random() * 0.7,\n            alpha: Math.random() * 0.7 + 0.3\n        });\n    }\n}\n\nfunction animateStars() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n    stars.forEach((s) => {\n        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;\n        ctx.fillRect(s.x, s.y, s.size, s.size);\n\n        s.y += s.speed;\n\n        if (s.y > canvas.height) {\n            s.y = -2;\n            s.x = Math.random() * canvas.width;\n        }\n    });\n\n    requestAnimationFrame(animateStars);\n}\n\ncreateStars();\nanimateStars();\n\n// dark and light mode\nconst darkMode = document.getElementById(\"darkMode\");\nconst lightMode = document.getElementById(\"lightMode\");\n\ndarkMode.addEventListener(\"click\",()=>{\n    localStorage.setItem(\"theme\", \"dark\");\n});\n\nlightMode.addEventListener(\"click\",()=>{\n    localStorage.setItem(\"theme\", \"light\");\n});\n\nwindow.addEventListener(\"resize\", () => {\n    resizeCanvas();\n    createStars();\n});\n\n\n//# sourceURL=webpack://campie/./src/assets/js/index.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/index.js");
/******/ 	
/******/ })()
;