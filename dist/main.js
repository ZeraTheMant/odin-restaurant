/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial-page-load */ \"./src/modules/initial-page-load.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\nvar contentDiv = document.querySelector('#content');\r\n\r\nconst navbarItemsHolder = document.querySelector('nav ul');\r\nnavbarItemsHolder.addEventListener('click', function(e) {\r\n    if(e.target && e.target.nodeName == \"LI\") {\r\n        contentDiv.innerHTML = '';\r\n        \r\n        if (e.target.id == 'home') {\r\n            contentDiv.appendChild((0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n        } else if (e.target.id == 'menu') {\r\n            contentDiv.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n        } else {\r\n            contentDiv.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.default)());\r\n        }\r\n    }\r\n});\r\n\r\ncontentDiv.appendChild((0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction generateContactContent() {\r\n    var element = document.createElement('div');\r\n    element.innerHTML = 'adsfds';\r\n    \r\n    return element;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactContent);\n\n//# sourceURL=webpack://odin-restaurant/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction generateHomeContent() {\r\n    var element = document.createElement('div');\r\n    \r\n    element.innerHTML = ` \r\n        <div id=\"home-container\">\r\n            <div id=\"home-showcase-container\">\r\n                <div class=\"black-div\">\r\n                    <h1>My restaurant</h1>\r\n                </div>\r\n\r\n\r\n                <div class=\"black-div\">\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\n                        Donec gravida sollicitudin urna nec varius. \r\n                        Curabitur sed orci in est finibus vulputate. Maecenas pretium dolor in diam ullamcorper egestas. \r\n                        Nam eu velit lorem. \r\n                    </p>\r\n                </div>\r\n            </div>\r\n            \r\n            <div id=\"home-misc-info\" class=\"black-div\">\r\n                <div id=\"misc-info-divider\">\r\n                    <div>\r\n                        <h1>Lorem ipsum dolor sit amet</h1>\r\n                        <p>\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\n                            Donec gravida sollicitudin urna nec varius. \r\n                            Curabitur sed orci in est finibus vulputate. Maecenas pretium dolor in diam ullamcorper egestas. \r\n                            Nam eu velit lorem.                         \r\n                        </p>\r\n                    </div>\r\n                    \r\n                    <div>\r\n                        <button id=\"order-btn\">Reserve a table</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n    \r\n    return element;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomeContent);\n\n//# sourceURL=webpack://odin-restaurant/./src/modules/initial-page-load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction generateMenuContent() {\r\n    var element = document.createElement('div');\r\n    element.innerHTML = `\r\n        <div id=\"menu-container\">\r\n            <div class=\"menu-item\">\r\n                <img src=\"https://feelgoodfoodie.net/wp-content/uploads/2019/12/Lebanese-Spicy-Potatoes-Batata-Harra-5-500x500.jpg\" class=\"menu-item-img\"/>\r\n                <h3 class=\"menu-item-name\">Spicy potato</h3>\r\n                <p class=\"menu-item-price\">$12.00</p>\r\n                <button class=\"menu-item-add-to-cart-btn\">Add to cart</button>\r\n            </div>\r\n            \r\n            <div class=\"menu-item\">\r\n                <img src=\"https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg\" class=\"menu-item-img\"/>\r\n                <h3 class=\"menu-item-name\">Pasta</h3>\r\n                <p class=\"menu-item-price\">$15.00</p>\r\n                <button class=\"menu-item-add-to-cart-btn\">Add to cart</button>                \r\n            </div>\r\n\r\n            <div class=\"menu-item\">\r\n                <img src=\"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/28/2/TM1A14F_Garlic-Bread_s4x3.jpg.rend.hgtvcom.616.462.suffix/1433523400627.jpeg\" class=\"menu-item-img\"/>\r\n                <h3 class=\"menu-item-name\">Garlic Bread</h3>  \r\n                <p class=\"menu-item-price\">$13.00</p>\r\n                <button class=\"menu-item-add-to-cart-btn\">Add to cart</button>                \r\n            </div>   \r\n\r\n            <div class=\"menu-item\">\r\n                <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nachos-cheese.jpg/398px-Nachos-cheese.jpg\" class=\"menu-item-img\"/>\r\n                <h3 class=\"menu-item-name\">Nachos</h3>  \r\n                <p class=\"menu-item-price\">$5.00</p>\r\n                <button class=\"menu-item-add-to-cart-btn\">Add to cart</button>                  \r\n            </div>\r\n\r\n            <div class=\"menu-item\">\r\n                <img src=\"https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2018/11/tomato-soup-recipes.jpg\" class=\"menu-item-img\"/>\r\n                <h3 class=\"menu-item-name\">Tomato Soup</h3>     \r\n                <p class=\"menu-item-price\">$7.00</p>\r\n                <button class=\"menu-item-add-to-cart-btn\">Add to cart</button>                  \r\n            </div>\r\n\r\n            <div class=\"menu-item\">\r\n                <img src=\"https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Salmon-foodiecrush.com-023-500x500.jpg\" class=\"menu-item-img\"/>\r\n                <h3 class=\"menu-item-name\">Grilled salmon</h3>    \r\n                <p class=\"menu-item-price\">$25.00</p>\r\n                <button class=\"menu-item-add-to-cart-btn\">Add to cart</button>                  \r\n            </div>            \r\n        </div>\r\n    `;\r\n    \r\n    return element;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuContent);\n\n//# sourceURL=webpack://odin-restaurant/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;