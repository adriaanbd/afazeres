import TodoItem from './components/TodoItem';
import Header from './interface/Header';
import Footer from './interface/Footer';

const content = document.querySelector('#content');
const appTitle = 'Afazeres';
const header = new Header(appTitle);
const footer = new Footer(appTitle, 2019);

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
content.appendChild(footer.generateFooter());
