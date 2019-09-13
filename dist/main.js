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

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
class Project {
  constructor(title, description = '') {
    this.title = title;
    this.description = description;
    this.toDoList = [];
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  addItem(item) {
    this.toDoList.push(item);
  }

  removeItem(pos) {
    this.toDoList.splice(pos, 1);
  }

  getList() {
    return this.toDoList;
  }
}


/***/ }),

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
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Project */ "./src/components/Project.js");
/* harmony import */ var _interface_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface/Header */ "./src/interface/Header.js");
/* harmony import */ var _interface_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/Footer */ "./src/interface/Footer.js");
/* harmony import */ var _interface_MainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/MainContent */ "./src/interface/MainContent.js");
/* harmony import */ var _interface_PageBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interface/PageBuilder */ "./src/interface/PageBuilder.js");
/* harmony import */ var _interface_ProjectComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interface/ProjectComponent */ "./src/interface/ProjectComponent.js");








const pageBuilder = new _interface_PageBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]();
const content = document.querySelector('#content');
const appTitle = 'Afazeres';
const header = new _interface_Header__WEBPACK_IMPORTED_MODULE_2__["default"](appTitle);
const footer = new _interface_Footer__WEBPACK_IMPORTED_MODULE_3__["default"](appTitle, 2019);

const todo = new _components_TodoItem__WEBPACK_IMPORTED_MODULE_0__["default"]('Todo 1', 'Something to do', 'a date');
const testProject = new _components_Project__WEBPACK_IMPORTED_MODULE_1__["default"]('Test Project', 'Testing stuff');
testProject.addItem(todo);
const testProjectGenerator = new _interface_ProjectComponent__WEBPACK_IMPORTED_MODULE_6__["default"](testProject.getList());
const testProjectDOM = testProjectGenerator.generateProjectDOM();


const test = document.createElement('h1');

test.innerHTML = 'Hello WOrld';
console.log(testProjectDOM);
const main = new _interface_MainContent__WEBPACK_IMPORTED_MODULE_4__["default"](testProjectDOM);
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
      if (divID) div.id = divID;
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


/***/ }),

/***/ "./src/interface/ProjectComponent.js":
/*!*******************************************!*\
  !*** ./src/interface/ProjectComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectComponent; });
/* harmony import */ var _PageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBuilder */ "./src/interface/PageBuilder.js");
/* harmony import */ var _ToDoItemComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoItemComponent */ "./src/interface/ToDoItemComponent.js");



class ProjectComponent {
  constructor(todoItems) {
    this.pageBuilder = new _PageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.todoItems = todoItems;
    this.cardContent = this.pageBuilder.generateDiv('list-items');
    this.generateList = (() => {
      this.todoItems.forEach((item) => {
        const itemDOM = new _ToDoItemComponent__WEBPACK_IMPORTED_MODULE_1__["default"](item);
        const div = itemDOM.generateItemDOM();
        this.cardContent.appendChild(div);
      });
    })();
  }

  generateProjectDOM() {
    const card = this.pageBuilder.generateCard(this.cardContent);
    return card;
  }
}


/***/ }),

/***/ "./src/interface/ToDoItemComponent.js":
/*!********************************************!*\
  !*** ./src/interface/ToDoItemComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoItemComponent; });
/* harmony import */ var _PageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageBuilder */ "./src/interface/PageBuilder.js");


class TodoItemComponent {
  constructor(todoItem) {
    this.item = todoItem;
    this.pageBuilder = new _PageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.wrapper = this.pageBuilder.generateDiv('list-item');
  }

  generateItemDOM() {
    const p = document.createElement('p');
    p.innerHTML = `Title: ${this.item.getTitle()}`;
    this.wrapper.appendChild(p);
    return this.wrapper;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS9NYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlL1BhZ2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UvUHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlL1RvRG9JdGVtQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7QUFDRjtBQUNIO0FBQ0E7QUFDVTtBQUNBO0FBQ1U7O0FBRTVELHdCQUF3Qiw4REFBVztBQUNuQztBQUNBO0FBQ0EsbUJBQW1CLHlEQUFNO0FBQ3pCLG1CQUFtQix5REFBTTs7QUFFekIsaUJBQWlCLDREQUFRO0FBQ3pCLHdCQUF3QiwyREFBTztBQUMvQjtBQUNBLGlDQUFpQyxtRUFBZ0I7QUFDakQ7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsOERBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQXdDOztBQUV6QjtBQUNmO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTSxPQUFPLEVBQUUsS0FBSztBQUNuRCwyQkFBMkIsb0RBQVc7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBd0M7O0FBRXpCO0FBQ2Y7QUFDQSwyQkFBMkIsb0RBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ1k7O0FBRXJDO0FBQ2Y7QUFDQSwyQkFBMkIsb0RBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMERBQWlCO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQXdDOztBQUV6QjtBQUNmO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQVc7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gJycpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9Eb0xpc3QgPSBbXTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgdGhpcy50b0RvTGlzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShwb3MpIHtcbiAgICB0aGlzLnRvRG9MaXN0LnNwbGljZShwb3MsIDEpO1xuICB9XG5cbiAgZ2V0TGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50b0RvTGlzdDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0l0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ID0gJ25vbmUnLCBzdGF0dXMgPSAwKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnZhbGlkUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbJ25vbmUnLCAnbG93JywgJ21lZGl1bScsICdoaWdoJ107XG4gICAgICByZXR1cm4gcHJpb3JpdGllcy5pbmNsdWRlcyhwcmlvcml0eSk7XG4gICAgfTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldERlc2NyaXB0aW9uKGRlcykge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXM7XG4gIH1cblxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXREdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkYXRlO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgIGlmICh0aGlzLnZhbGlkUHJpb3JpdHkocHJpb3JpdHkpKSB7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXMgPT09IDAgPyAxIDogMDtcbiAgfVxufVxuIiwiaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vY29tcG9uZW50cy9Ub2RvSXRlbSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaW50ZXJmYWNlL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vaW50ZXJmYWNlL0Zvb3Rlcic7XG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSAnLi9pbnRlcmZhY2UvTWFpbkNvbnRlbnQnO1xuaW1wb3J0IFBhZ2VCdWlsZGVyIGZyb20gJy4vaW50ZXJmYWNlL1BhZ2VCdWlsZGVyJztcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gJy4vaW50ZXJmYWNlL1Byb2plY3RDb21wb25lbnQnO1xuXG5jb25zdCBwYWdlQnVpbGRlciA9IG5ldyBQYWdlQnVpbGRlcigpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBhcHBUaXRsZSA9ICdBZmF6ZXJlcyc7XG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKGFwcFRpdGxlKTtcbmNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIoYXBwVGl0bGUsIDIwMTkpO1xuXG5jb25zdCB0b2RvID0gbmV3IFRvZG9JdGVtKCdUb2RvIDEnLCAnU29tZXRoaW5nIHRvIGRvJywgJ2EgZGF0ZScpO1xuY29uc3QgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnVGVzdCBQcm9qZWN0JywgJ1Rlc3Rpbmcgc3R1ZmYnKTtcbnRlc3RQcm9qZWN0LmFkZEl0ZW0odG9kbyk7XG5jb25zdCB0ZXN0UHJvamVjdEdlbmVyYXRvciA9IG5ldyBQcm9qZWN0Q29tcG9uZW50KHRlc3RQcm9qZWN0LmdldExpc3QoKSk7XG5jb25zdCB0ZXN0UHJvamVjdERPTSA9IHRlc3RQcm9qZWN0R2VuZXJhdG9yLmdlbmVyYXRlUHJvamVjdERPTSgpO1xuXG5cbmNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG50ZXN0LmlubmVySFRNTCA9ICdIZWxsbyBXT3JsZCc7XG5jb25zb2xlLmxvZyh0ZXN0UHJvamVjdERPTSk7XG5jb25zdCBtYWluID0gbmV3IE1haW5Db250ZW50KHRlc3RQcm9qZWN0RE9NKTtcbmNvbnN0IGdldFRvZG9BdHRyID0gKHRvZG9JbnN0YW5jZSkgPT4gW1xuICB0b2RvSW5zdGFuY2UuZ2V0VGl0bGUoKSxcbiAgdG9kb0luc3RhbmNlLmdldERlc2NyaXB0aW9uKCksXG4gIHRvZG9JbnN0YW5jZS5nZXREdWVEYXRlKCksXG4gIHRvZG9JbnN0YW5jZS5nZXRQcmlvcml0eSgpLFxuXTtcblxuZ2V0VG9kb0F0dHIodG9kbyk7XG5cbmNvbnN0IGdlbmVyYXRlTWFpblNrZWxldG9uID0gKCkgPT4ge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlci5jcmVhdGVOYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbi5nZW5lcmF0ZUNvbnRlbnQoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyLmdlbmVyYXRlRm9vdGVyKCkpO1xufTtcblxuZ2VuZXJhdGVNYWluU2tlbGV0b24oKTtcbiIsImltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL1BhZ2VCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHllYXIpIHtcbiAgICB0aGlzLmZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIHRoaXMuZm9vdGVyVGV4dCA9ICgpID0+IGAke3RpdGxlfSAmY29weTske3llYXJ9YDtcbiAgICB0aGlzLnBhZ2VCdWlsZGVyID0gbmV3IFBhZ2VCdWlsZGVyKCk7XG4gIH1cblxuICBnZW5lcmF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBwID0gdGhpcy5wYWdlQnVpbGRlci5nZW5lcmF0ZVAodGhpcy5mb290ZXJUZXh0KCksICdmbG93LXRleHQnKTtcbiAgICB0aGlzLmZvb3Rlci5jbGFzc05hbWUgPSAnc2VjdGlvbiBwdXJwbGUgZGFya2VuLTEgd2hpdGUtdGV4dCBjZW50ZXInO1xuICAgIHRoaXMuZm9vdGVyLmFwcGVuZENoaWxkKHApO1xuICAgIHJldHVybiB0aGlzLmZvb3RlcjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbmF2LmNsYXNzTmFtZSA9ICdwdXJwbGUgZGFya2VuLTEnO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBgJHt0aGlzLnRpdGxlfWA7XG4gICAgbG9nby5jbGFzc05hbWUgPSAnYnJhbmQtbG9nbyBjZW50ZXInO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZXcmFwcGVyKTtcbiAgICBuYXZXcmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIHJldHVybiBuYXY7XG4gIH1cbn1cbiIsImltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL1BhZ2VCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkNvbnRlbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XG4gICAgdGhpcy5wYWdlQnVpbGRlciA9IG5ldyBQYWdlQnVpbGRlcigpO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIHRoaXMuY29udGVudFdyYXBwZXIgPSB0aGlzLnBhZ2VCdWlsZGVyLmdlbmVyYXRlRGl2KCdjb250ZW50JywgJ2NoYW5naW5nX2NvbnRlbnQnKTtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZW5lcmF0ZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBpZiAoZGl2KSB0aGlzLm1haW4ucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB0aGlzLmNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG4gICAgdGhpcy5tYWluLmFwcGVuZCh0aGlzLmNvbnRlbnRXcmFwcGVyKTtcbiAgICByZXR1cm4gdGhpcy5tYWluO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlRGl2ID0gKGRpdkNsYXNzLCBkaXZJRCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NOYW1lID0gZGl2Q2xhc3M7XG4gICAgICBpZiAoZGl2SUQpIGRpdi5pZCA9IGRpdklEO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVQID0gKGNvbnRlbnQsIHBDbGFzcykgPT4ge1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHAuY2xhc3NOYW1lID0gcENsYXNzO1xuICAgICAgcC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbiAgfVxuXG4gIGdlbmVyYXRlRGl2KGRpdkNsYXNzID0gJycsIGRpdklEID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVEaXYoZGl2Q2xhc3MsIGRpdklEKTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZChjb250ZW50LCBjYXJkSUQgPSAnJykge1xuICAgIGNvbnN0IGNhcmQgPSB0aGlzLmNyZWF0ZURpdignY2FyZCcsIGNhcmRJRCk7XG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSB0aGlzLmNyZWF0ZURpdignY2FyZC1jb250ZW50Jyk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cblxuICBnZW5lcmF0ZVAoY29udGVudCwgcENsYXNzID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVQKGNvbnRlbnQsIHBDbGFzcyk7XG4gIH1cbn1cbiIsImltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL1BhZ2VCdWlsZGVyJztcbmltcG9ydCBUb2RvSXRlbUNvbXBvbmVudCBmcm9tICcuL1RvRG9JdGVtQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRvZG9JdGVtcykge1xuICAgIHRoaXMucGFnZUJ1aWxkZXIgPSBuZXcgUGFnZUJ1aWxkZXIoKTtcbiAgICB0aGlzLnRvZG9JdGVtcyA9IHRvZG9JdGVtcztcbiAgICB0aGlzLmNhcmRDb250ZW50ID0gdGhpcy5wYWdlQnVpbGRlci5nZW5lcmF0ZURpdignbGlzdC1pdGVtcycpO1xuICAgIHRoaXMuZ2VuZXJhdGVMaXN0ID0gKCgpID0+IHtcbiAgICAgIHRoaXMudG9kb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbURPTSA9IG5ldyBUb2RvSXRlbUNvbXBvbmVudChpdGVtKTtcbiAgICAgICAgY29uc3QgZGl2ID0gaXRlbURPTS5nZW5lcmF0ZUl0ZW1ET00oKTtcbiAgICAgICAgdGhpcy5jYXJkQ29udGVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfVxuXG4gIGdlbmVyYXRlUHJvamVjdERPTSgpIHtcbiAgICBjb25zdCBjYXJkID0gdGhpcy5wYWdlQnVpbGRlci5nZW5lcmF0ZUNhcmQodGhpcy5jYXJkQ29udGVudCk7XG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cbn1cbiIsImltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL1BhZ2VCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0b2RvSXRlbSkge1xuICAgIHRoaXMuaXRlbSA9IHRvZG9JdGVtO1xuICAgIHRoaXMucGFnZUJ1aWxkZXIgPSBuZXcgUGFnZUJ1aWxkZXIoKTtcbiAgICB0aGlzLndyYXBwZXIgPSB0aGlzLnBhZ2VCdWlsZGVyLmdlbmVyYXRlRGl2KCdsaXN0LWl0ZW0nKTtcbiAgfVxuXG4gIGdlbmVyYXRlSXRlbURPTSgpIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gYFRpdGxlOiAke3RoaXMuaXRlbS5nZXRUaXRsZSgpfWA7XG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHApO1xuICAgIHJldHVybiB0aGlzLndyYXBwZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=