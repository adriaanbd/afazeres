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
const testProjectGenerator = new _interface_ProjectComponent__WEBPACK_IMPORTED_MODULE_6__["default"](testProject);
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

    this.createUl = (ulClass, id) => {
      const ul = document.createElement('ul');

      if (ulClass) ul.className = ulClass;
      if (id) ul.id = id;

      return ul;
    };

    this.createLi = (content, liClass, id) => {
      const li = document.createElement('li');

      if (content) li.innerHTML = content;
      if (liClass) li.className = liClass;
      if (id) li.id = id;

      return li;
    };

    this.createHeader = (size, content) => {
      const header = document.createElement(`h${size}`);
      if (content) header.innerHTML = content;
      console.log(header);
      return header;
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

  generateUl(ulClass = '', id = '') {
    return this.createUl(ulClass, id);
  }

  generateLi(content = '', liClass = '', id = '') {
    return this.createLi(content, liClass, id);
  }

  generateHeader(size, content = '') {
    return this.createHeader(size, content);
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
  constructor(project) {
    this.title = project.getTitle();
    this.pageBuilder = new _PageBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.todoItems = project.getList();
    this.cardContent = this.pageBuilder.generateUl('collection with-header');
    this.generateList = () => {
      this.todoItems.forEach((item) => {
        const itemDOM = new _ToDoItemComponent__WEBPACK_IMPORTED_MODULE_1__["default"](item);
        const li = itemDOM.generateItemDOM();
        this.cardContent.appendChild(li);
      });
    };
  }

  generateProjectDOM() {
    const header = this.pageBuilder.generateHeader(4, this.title);
    const collectionHeader = this.pageBuilder.generateLi('', 'collection-header');
    collectionHeader.appendChild(header);
    this.cardContent.appendChild(collectionHeader);
    this.generateList();
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
    // this.wrapper = this.pageBuilder.generateDiv('list-item');
  }

  generateItemDOM() {
    const liContent = `Title: ${this.item.getTitle()}`;
    const li = this.pageBuilder.generateLi(liContent, 'collection-item');

    return li;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS9NYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlL1BhZ2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmZhY2UvUHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlL1RvRG9JdGVtQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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O0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiA9ICcnKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRvRG9MaXN0ID0gW107XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbSkge1xuICAgIHRoaXMudG9Eb0xpc3QucHVzaChpdGVtKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0ocG9zKSB7XG4gICAgdGhpcy50b0RvTGlzdC5zcGxpY2UocG9zLCAxKTtcbiAgfVxuXG4gIGdldExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9Eb0xpc3Q7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSA9ICdub25lJywgc3RhdHVzID0gMCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy52YWxpZFByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0aWVzID0gWydub25lJywgJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xuICAgICAgcmV0dXJuIHByaW9yaXRpZXMuaW5jbHVkZXMocHJpb3JpdHkpO1xuICAgIH07XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXMpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzO1xuICB9XG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICBpZiAodGhpcy52YWxpZFByaW9yaXR5KHByaW9yaXR5KSkge1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVN0YXR1cygpIHtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzID09PSAwID8gMSA6IDA7XG4gIH1cbn1cbiIsImltcG9ydCBUb2RvSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvVG9kb0l0ZW0nO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2ludGVyZmFjZS9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2ludGVyZmFjZS9Gb290ZXInO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4vaW50ZXJmYWNlL01haW5Db250ZW50JztcbmltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL2ludGVyZmFjZS9QYWdlQnVpbGRlcic7XG5pbXBvcnQgUHJvamVjdENvbXBvbmVudCBmcm9tICcuL2ludGVyZmFjZS9Qcm9qZWN0Q29tcG9uZW50JztcblxuY29uc3QgcGFnZUJ1aWxkZXIgPSBuZXcgUGFnZUJ1aWxkZXIoKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgYXBwVGl0bGUgPSAnQWZhemVyZXMnO1xuY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcihhcHBUaXRsZSk7XG5jb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyKGFwcFRpdGxlLCAyMDE5KTtcblxuY29uc3QgdG9kbyA9IG5ldyBUb2RvSXRlbSgnVG9kbyAxJywgJ1NvbWV0aGluZyB0byBkbycsICdhIGRhdGUnKTtcbmNvbnN0IHRlc3RQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1Rlc3QgUHJvamVjdCcsICdUZXN0aW5nIHN0dWZmJyk7XG50ZXN0UHJvamVjdC5hZGRJdGVtKHRvZG8pO1xuY29uc3QgdGVzdFByb2plY3RHZW5lcmF0b3IgPSBuZXcgUHJvamVjdENvbXBvbmVudCh0ZXN0UHJvamVjdCk7XG5jb25zdCB0ZXN0UHJvamVjdERPTSA9IHRlc3RQcm9qZWN0R2VuZXJhdG9yLmdlbmVyYXRlUHJvamVjdERPTSgpO1xuXG5cbmNvbnN0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG50ZXN0LmlubmVySFRNTCA9ICdIZWxsbyBXT3JsZCc7XG5jb25zb2xlLmxvZyh0ZXN0UHJvamVjdERPTSk7XG5jb25zdCBtYWluID0gbmV3IE1haW5Db250ZW50KHRlc3RQcm9qZWN0RE9NKTtcbmNvbnN0IGdldFRvZG9BdHRyID0gKHRvZG9JbnN0YW5jZSkgPT4gW1xuICB0b2RvSW5zdGFuY2UuZ2V0VGl0bGUoKSxcbiAgdG9kb0luc3RhbmNlLmdldERlc2NyaXB0aW9uKCksXG4gIHRvZG9JbnN0YW5jZS5nZXREdWVEYXRlKCksXG4gIHRvZG9JbnN0YW5jZS5nZXRQcmlvcml0eSgpLFxuXTtcblxuZ2V0VG9kb0F0dHIodG9kbyk7XG5cbmNvbnN0IGdlbmVyYXRlTWFpblNrZWxldG9uID0gKCkgPT4ge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlci5jcmVhdGVOYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbi5nZW5lcmF0ZUNvbnRlbnQoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyLmdlbmVyYXRlRm9vdGVyKCkpO1xufTtcblxuZ2VuZXJhdGVNYWluU2tlbGV0b24oKTtcbiIsImltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL1BhZ2VCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHllYXIpIHtcbiAgICB0aGlzLmZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIHRoaXMuZm9vdGVyVGV4dCA9ICgpID0+IGAke3RpdGxlfSAmY29weTske3llYXJ9YDtcbiAgICB0aGlzLnBhZ2VCdWlsZGVyID0gbmV3IFBhZ2VCdWlsZGVyKCk7XG4gIH1cblxuICBnZW5lcmF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBwID0gdGhpcy5wYWdlQnVpbGRlci5nZW5lcmF0ZVAodGhpcy5mb290ZXJUZXh0KCksICdmbG93LXRleHQnKTtcbiAgICB0aGlzLmZvb3Rlci5jbGFzc05hbWUgPSAnc2VjdGlvbiBwdXJwbGUgZGFya2VuLTEgd2hpdGUtdGV4dCBjZW50ZXInO1xuICAgIHRoaXMuZm9vdGVyLmFwcGVuZENoaWxkKHApO1xuICAgIHJldHVybiB0aGlzLmZvb3RlcjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbmF2LmNsYXNzTmFtZSA9ICdwdXJwbGUgZGFya2VuLTEnO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBgJHt0aGlzLnRpdGxlfWA7XG4gICAgbG9nby5jbGFzc05hbWUgPSAnYnJhbmQtbG9nbyBjZW50ZXInO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZXcmFwcGVyKTtcbiAgICBuYXZXcmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIHJldHVybiBuYXY7XG4gIH1cbn1cbiIsImltcG9ydCBQYWdlQnVpbGRlciBmcm9tICcuL1BhZ2VCdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkNvbnRlbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XG4gICAgdGhpcy5wYWdlQnVpbGRlciA9IG5ldyBQYWdlQnVpbGRlcigpO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIHRoaXMuY29udGVudFdyYXBwZXIgPSB0aGlzLnBhZ2VCdWlsZGVyLmdlbmVyYXRlRGl2KCdjb250ZW50JywgJ2NoYW5naW5nX2NvbnRlbnQnKTtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZW5lcmF0ZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBpZiAoZGl2KSB0aGlzLm1haW4ucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB0aGlzLmNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG4gICAgdGhpcy5tYWluLmFwcGVuZCh0aGlzLmNvbnRlbnRXcmFwcGVyKTtcbiAgICByZXR1cm4gdGhpcy5tYWluO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlRGl2ID0gKGRpdkNsYXNzLCBkaXZJRCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NOYW1lID0gZGl2Q2xhc3M7XG4gICAgICBpZiAoZGl2SUQpIGRpdi5pZCA9IGRpdklEO1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVQID0gKGNvbnRlbnQsIHBDbGFzcykgPT4ge1xuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHAuY2xhc3NOYW1lID0gcENsYXNzO1xuICAgICAgcC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlVWwgPSAodWxDbGFzcywgaWQpID0+IHtcbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgaWYgKHVsQ2xhc3MpIHVsLmNsYXNzTmFtZSA9IHVsQ2xhc3M7XG4gICAgICBpZiAoaWQpIHVsLmlkID0gaWQ7XG5cbiAgICAgIHJldHVybiB1bDtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVMaSA9IChjb250ZW50LCBsaUNsYXNzLCBpZCkgPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICBpZiAoY29udGVudCkgbGkuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgIGlmIChsaUNsYXNzKSBsaS5jbGFzc05hbWUgPSBsaUNsYXNzO1xuICAgICAgaWYgKGlkKSBsaS5pZCA9IGlkO1xuXG4gICAgICByZXR1cm4gbGk7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlSGVhZGVyID0gKHNpemUsIGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke3NpemV9YCk7XG4gICAgICBpZiAoY29udGVudCkgaGVhZGVyLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICBjb25zb2xlLmxvZyhoZWFkZXIpO1xuICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9O1xuICB9XG5cbiAgZ2VuZXJhdGVEaXYoZGl2Q2xhc3MgPSAnJywgZGl2SUQgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZURpdihkaXZDbGFzcywgZGl2SUQpO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKGNvbnRlbnQsIGNhcmRJRCA9ICcnKSB7XG4gICAgY29uc3QgY2FyZCA9IHRoaXMuY3JlYXRlRGl2KCdjYXJkJywgY2FyZElEKTtcbiAgICBjb25zdCBjYXJkQ29udGVudCA9IHRoaXMuY3JlYXRlRGl2KCdjYXJkLWNvbnRlbnQnKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfVxuXG4gIGdlbmVyYXRlUChjb250ZW50LCBwQ2xhc3MgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVAoY29udGVudCwgcENsYXNzKTtcbiAgfVxuXG4gIGdlbmVyYXRlVWwodWxDbGFzcyA9ICcnLCBpZCA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlVWwodWxDbGFzcywgaWQpO1xuICB9XG5cbiAgZ2VuZXJhdGVMaShjb250ZW50ID0gJycsIGxpQ2xhc3MgPSAnJywgaWQgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUxpKGNvbnRlbnQsIGxpQ2xhc3MsIGlkKTtcbiAgfVxuXG4gIGdlbmVyYXRlSGVhZGVyKHNpemUsIGNvbnRlbnQgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUhlYWRlcihzaXplLCBjb250ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBhZ2VCdWlsZGVyIGZyb20gJy4vUGFnZUJ1aWxkZXInO1xuaW1wb3J0IFRvZG9JdGVtQ29tcG9uZW50IGZyb20gJy4vVG9Eb0l0ZW1Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgdGhpcy5wYWdlQnVpbGRlciA9IG5ldyBQYWdlQnVpbGRlcigpO1xuICAgIHRoaXMudG9kb0l0ZW1zID0gcHJvamVjdC5nZXRMaXN0KCk7XG4gICAgdGhpcy5jYXJkQ29udGVudCA9IHRoaXMucGFnZUJ1aWxkZXIuZ2VuZXJhdGVVbCgnY29sbGVjdGlvbiB3aXRoLWhlYWRlcicpO1xuICAgIHRoaXMuZ2VuZXJhdGVMaXN0ID0gKCkgPT4ge1xuICAgICAgdGhpcy50b2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRE9NID0gbmV3IFRvZG9JdGVtQ29tcG9uZW50KGl0ZW0pO1xuICAgICAgICBjb25zdCBsaSA9IGl0ZW1ET00uZ2VuZXJhdGVJdGVtRE9NKCk7XG4gICAgICAgIHRoaXMuY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGdlbmVyYXRlUHJvamVjdERPTSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLnBhZ2VCdWlsZGVyLmdlbmVyYXRlSGVhZGVyKDQsIHRoaXMudGl0bGUpO1xuICAgIGNvbnN0IGNvbGxlY3Rpb25IZWFkZXIgPSB0aGlzLnBhZ2VCdWlsZGVyLmdlbmVyYXRlTGkoJycsICdjb2xsZWN0aW9uLWhlYWRlcicpO1xuICAgIGNvbGxlY3Rpb25IZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0aGlzLmNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNvbGxlY3Rpb25IZWFkZXIpO1xuICAgIHRoaXMuZ2VuZXJhdGVMaXN0KCk7XG4gICAgY29uc3QgY2FyZCA9IHRoaXMucGFnZUJ1aWxkZXIuZ2VuZXJhdGVDYXJkKHRoaXMuY2FyZENvbnRlbnQpO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgUGFnZUJ1aWxkZXIgZnJvbSAnLi9QYWdlQnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodG9kb0l0ZW0pIHtcbiAgICB0aGlzLml0ZW0gPSB0b2RvSXRlbTtcbiAgICB0aGlzLnBhZ2VCdWlsZGVyID0gbmV3IFBhZ2VCdWlsZGVyKCk7XG4gICAgLy8gdGhpcy53cmFwcGVyID0gdGhpcy5wYWdlQnVpbGRlci5nZW5lcmF0ZURpdignbGlzdC1pdGVtJyk7XG4gIH1cblxuICBnZW5lcmF0ZUl0ZW1ET00oKSB7XG4gICAgY29uc3QgbGlDb250ZW50ID0gYFRpdGxlOiAke3RoaXMuaXRlbS5nZXRUaXRsZSgpfWA7XG4gICAgY29uc3QgbGkgPSB0aGlzLnBhZ2VCdWlsZGVyLmdlbmVyYXRlTGkobGlDb250ZW50LCAnY29sbGVjdGlvbi1pdGVtJyk7XG5cbiAgICByZXR1cm4gbGk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=