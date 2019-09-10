import TodoItem from './components/TodoItem';
import Header from './interface/Header';

const content = document.querySelector('#content');
const header = new Header('To Do App');

const todo = new TodoItem('Todo 1', 'Something to do', 'a date');

const getTodoAttr = (todoInstance) => [
  todoInstance.getTitle(),
  todoInstance.getDescription(),
  todoInstance.getDueDate(),
  todoInstance.getPriority(),
];

getTodoAttr(todo);

const nav = header.createNav();
content.appendChild(nav);
