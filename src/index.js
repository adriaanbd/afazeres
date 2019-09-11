import TodoItem from './components/TodoItem';
import Header from './interface/Header';
import Footer from './interface/Footer';
import MainContent from './interface/MainContent';
import PageBuilder from './interface/PageBuilder';

const pageBuilder = new PageBuilder();
const content = document.querySelector('#content');
const appTitle = 'Afazeres';
const header = new Header(appTitle);
const footer = new Footer(appTitle, 2019);

const todo = new TodoItem('Todo 1', 'Something to do', 'a date');

const test = document.createElement('h1');

test.innerHTML = 'Hello WOrld';

const main = new MainContent(test);
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
