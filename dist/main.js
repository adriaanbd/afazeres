/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/TodoItem.js":
/*!************************************!*\
  !*** ./src/components/TodoItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoItem; });
class TodoItem {
  constructor(title, description, dueDate, priority = 'none', status = 0) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.validPriority = (priority) => {
      const priorities = ['none', 'low', 'medium', 'high'];
      return priorities.includes(priority);
    };
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(des) {
    this.description = des;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    if (this.validPriority(priority)) {
      this.priority = priority;
    }
  }

  toggleStatus() {
    this.status = this.status === 0 ? 1 : 0;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TodoItem */ "./src/components/TodoItem.js");
/* harmony import */ var _interface_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/Header */ "./src/interface/Header.js");
/* harmony import */ var _interface_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/Footer */ "./src/interface/Footer.js");
/* harmony import */ var _interface_MainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/MainContent */ "./src/interface/MainContent.js");
/* harmony import */ var _interface_PageBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/PageBuilder */ "./src/interface/PageBuilder.js");






const pageBuilder = new _interface_PageBuilder__WEBPACK_IMPORTED_MODULE_4__["default"]();
const content = document.querySelector('#content');
const appTitle = 'Afazeres';
const header = new _interface_Header__WEBPACK_IMPORTED_MODULE_1__["default"](appTitle);
const footer = new _interface_Footer__WEBPACK_IMPORTED_MODULE_2__["default"](appTitle, 2019);

const todo = new _components_TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 1', 'Something to do', 'a date');

const test = document.createElement('h1');

test.innerHTML = 'Hello WOrld';

const main = new _interface_MainContent__WEBPACK_IMPORTED_MODULE_3__["default"](test);
const getTodoAttr = (todoInstance) => [
  todoInstance.getTitle(),
  todoInstance.getDescription(),
  todoInstance.getDueDate(),
  todoInstance.getPriority(),
];

getTodoAttr(todo);

const generateMainSkeleton = () => {
  content.appendChild(header.createNav());
  content.appendChild(main.generateContent());
  content.appendChild(footer.generateFooter());
};

generateMainSkeleton();


/***/ }),

/***/ "./src/interface/Footer.js":
/*!*********************************!*\
  !*** ./src/interface/Footer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _PageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBuilder */ "./src/interface/PageBuilder.js");


class Footer {
  constructor(title, year) {
    this.footer = document.createElement('footer');
    this.footerText = () => `${title} &copy;${year}`;
    this.pageBuilder = new _PageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  generateFooter() {
    const p = this.pageBuilder.generateP(this.footerText(), 'flow-text');
    this.footer.className = 'section purple darken-1 white-text center';
    this.footer.appendChild(p);
    return this.footer;
  }
}


/***/ }),

/***/ "./src/interface/Header.js":
/*!*********************************!*\
  !*** ./src/interface/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
class Header {
  constructor(title) {
    this.title = title;
  }

  createNav() {
    const nav = document.createElement('nav');
    const navWrapper = document.createElement('div');
    const logo = document.createElement('a');
    nav.className = 'purple darken-1';
    logo.textContent = `${this.title}`;
    logo.className = 'brand-logo center';
    nav.appendChild(navWrapper);
    navWrapper.appendChild(logo);
    return nav;
  }
}


/***/ }),

/***/ "./src/interface/MainContent.js":
/*!**************************************!*\
  !*** ./src/interface/MainContent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContent; });
/* harmony import */ var _PageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBuilder */ "./src/interface/PageBuilder.js");


class MainContent {
  constructor(content) {
    this.pageBuilder = new _PageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.content = content;
    this.main = document.createElement('main');
    this.contentWrapper = this.pageBuilder.generateDiv('content', 'changing_content');
  }

  setContent(content) {
    this.content = content;
  }

  generateContent() {
    const div = document.querySelector('.content');
    if (div) this.main.removeChild(div);
    this.contentWrapper.appendChild(this.content);
    this.main.append(this.contentWrapper);
    return this.main;
  }
}


/***/ }),

/***/ "./src/interface/PageBuilder.js":
/*!**************************************!*\
  !*** ./src/interface/PageBuilder.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageBuilder; });
class PageBuilder {
  constructor() {
    this.createDiv = (divClass, divID) => {
      const div = document.createElement('div');
      div.className = divClass;
      div.id = divID;
      return div;
    };

    this.createP = (content, pClass) => {
      const p = document.createElement('p');
      p.className = pClass;
      p.innerHTML = content;
      return p;
    };
  }

  generateDiv(divClass = '', divID = '') {
    return this.createDiv(divClass, divID);
  }

  generateCard(content, cardID = '') {
    const card = this.createDiv('card', cardID);
    const cardContent = this.createDiv('card-content');
    cardContent.appendChild(content);
    card.appendChild(cardContent);
    return card;
  }

  generateP(content, pClass = '') {
    return this.createP(content, pClass);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UvTWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS9QYWdlQnVpbGRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ0w7QUFDQTtBQUNVO0FBQ0E7O0FBRWxELHdCQUF3Qiw4REFBVztBQUNuQztBQUNBO0FBQ0EsbUJBQW1CLHlEQUFNO0FBQ3pCLG1CQUFtQix5REFBTTs7QUFFekIsaUJBQWlCLDREQUFROztBQUV6Qjs7QUFFQTs7QUFFQSxpQkFBaUIsOERBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQXdDOztBQUV6QjtBQUNmO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTSxPQUFPLEVBQUUsS0FBSztBQUNuRCwyQkFBMkIsb0RBQVc7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBd0M7O0FBRXpCO0FBQ2Y7QUFDQSwyQkFBMkIsb0RBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSA9ICdub25lJywgc3RhdHVzID0gMCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy52YWxpZFByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0aWVzID0gWydub25lJywgJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xuICAgICAgcmV0dXJuIHByaW9yaXRpZXMuaW5jbHVkZXMocHJpb3JpdHkpO1xuICAgIH07XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXMpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzO1xuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICBpZiAodGhpcy52YWxpZFByaW9yaXR5KHByaW9yaXR5KSkge1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVN0YXR1cygpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzID09PSAwID8gMSA6IDA7XG4gIH1cbn1cbiIsImltcG9ydCBUb2RvSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvVG9kb0l0ZW0nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2ludGVyZmFjZS9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2ludGVyZmFjZS9Gb290ZXInO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vaW50ZXJmYWNlL01haW5Db250ZW50JztcbmltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL2ludGVyZmFjZS9QYWdlQnVpbGRlcic7XG5cbmNvbnN0IHBhZ2VCdWlsZGVyID0gbmV3IFBhZ2VCdWlsZGVyKCk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGFwcFRpdGxlID0gJ0FmYXplcmVzJztcbmNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIoYXBwVGl0bGUpO1xuY29uc3QgZm9vdGVyID0gbmV3IEZvb3RlcihhcHBUaXRsZSwgMjAxOSk7XG5cbmNvbnN0IHRvZG8gPSBuZXcgVG9kb0l0ZW0oJ1RvZG8gMScsICdTb21ldGhpbmcgdG8gZG8nLCAnYSBkYXRlJyk7XG5cbmNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG50ZXN0LmlubmVySFRNTCA9ICdIZWxsbyBXT3JsZCc7XG5cbmNvbnN0IG1haW4gPSBuZXcgTWFpbkNvbnRlbnQodGVzdCk7XG5jb25zdCBnZXRUb2RvQXR0ciA9ICh0b2RvSW5zdGFuY2UpID0+IFtcbiAgdG9kb0luc3RhbmNlLmdldFRpdGxlKCksXG4gIHRvZG9JbnN0YW5jZS5nZXREZXNjcmlwdGlvbigpLFxuICB0b2RvSW5zdGFuY2UuZ2V0RHVlRGF0ZSgpLFxuICB0b2RvSW5zdGFuY2UuZ2V0UHJpb3JpdHkoKSxcbl07XG5cbmdldFRvZG9BdHRyKHRvZG8pO1xuXG5jb25zdCBnZW5lcmF0ZU1haW5Ta2VsZXRvbiA9ICgpID0+IHtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIuY3JlYXRlTmF2KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4uZ2VuZXJhdGVDb250ZW50KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlci5nZW5lcmF0ZUZvb3RlcigpKTtcbn07XG5cbmdlbmVyYXRlTWFpblNrZWxldG9uKCk7XG4iLCJpbXBvcnQgUGFnZUJ1aWxkZXIgZnJvbSAnLi9QYWdlQnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB5ZWFyKSB7XG4gICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICB0aGlzLmZvb3RlclRleHQgPSAoKSA9PiBgJHt0aXRsZX0gJmNvcHk7JHt5ZWFyfWA7XG4gICAgdGhpcy5wYWdlQnVpbGRlciA9IG5ldyBQYWdlQnVpbGRlcigpO1xuICB9XG5cbiAgZ2VuZXJhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgcCA9IHRoaXMucGFnZUJ1aWxkZXIuZ2VuZXJhdGVQKHRoaXMuZm9vdGVyVGV4dCgpLCAnZmxvdy10ZXh0Jyk7XG4gICAgdGhpcy5mb290ZXIuY2xhc3NOYW1lID0gJ3NlY3Rpb24gcHVycGxlIGRhcmtlbi0xIHdoaXRlLXRleHQgY2VudGVyJztcbiAgICB0aGlzLmZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgICByZXR1cm4gdGhpcy5mb290ZXI7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IG5hdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG5hdi5jbGFzc05hbWUgPSAncHVycGxlIGRhcmtlbi0xJztcbiAgICBsb2dvLnRleHRDb250ZW50ID0gYCR7dGhpcy50aXRsZX1gO1xuICAgIGxvZ28uY2xhc3NOYW1lID0gJ2JyYW5kLWxvZ28gY2VudGVyJztcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2V3JhcHBlcik7XG4gICAgbmF2V3JhcHBlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICByZXR1cm4gbmF2O1xuICB9XG59XG4iLCJpbXBvcnQgUGFnZUJ1aWxkZXIgZnJvbSAnLi9QYWdlQnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250ZW50IHtcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgIHRoaXMucGFnZUJ1aWxkZXIgPSBuZXcgUGFnZUJ1aWxkZXIoKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICB0aGlzLmNvbnRlbnRXcmFwcGVyID0gdGhpcy5wYWdlQnVpbGRlci5nZW5lcmF0ZURpdignY29udGVudCcsICdjaGFuZ2luZ19jb250ZW50Jyk7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2VuZXJhdGVDb250ZW50KCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgaWYgKGRpdikgdGhpcy5tYWluLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgdGhpcy5jb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICAgIHRoaXMubWFpbi5hcHBlbmQodGhpcy5jb250ZW50V3JhcHBlcik7XG4gICAgcmV0dXJuIHRoaXMubWFpbjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZURpdiA9IChkaXZDbGFzcywgZGl2SUQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTmFtZSA9IGRpdkNsYXNzO1xuICAgICAgZGl2LmlkID0gZGl2SUQ7XG4gICAgICByZXR1cm4gZGl2O1xuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVAgPSAoY29udGVudCwgcENsYXNzKSA9PiB7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcC5jbGFzc05hbWUgPSBwQ2xhc3M7XG4gICAgICBwLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICByZXR1cm4gcDtcbiAgICB9O1xuICB9XG5cbiAgZ2VuZXJhdGVEaXYoZGl2Q2xhc3MgPSAnJywgZGl2SUQgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZURpdihkaXZDbGFzcywgZGl2SUQpO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKGNvbnRlbnQsIGNhcmRJRCA9ICcnKSB7XG4gICAgY29uc3QgY2FyZCA9IHRoaXMuY3JlYXRlRGl2KCdjYXJkJywgY2FyZElEKTtcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IHRoaXMuY3JlYXRlRGl2KCdjYXJkLWNvbnRlbnQnKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGdlbmVyYXRlUChjb250ZW50LCBwQ2xhc3MgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVAoY29udGVudCwgcENsYXNzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==