import TodoItem from './components/TodoItem';
import Project from './components/Project';
import Header from './interface/Header';
import Footer from './interface/Footer';
import MainContent from './interface/MainContent';
import PageBuilder from './interface/PageBuilder';
import ProjectComponent from './interface/ProjectComponent';

const pageBuilder = new PageBuilder();
const content = document.querySelector('#content');
const appTitle = 'Afazeres';
const header = new Header(appTitle);
const footer = new Footer(appTitle, 2019);

const todo = new TodoItem('Todo 1', 'Something to do', 'a date');
const testProject = new Project('Test Project', 'Testing stuff');
testProject.addItem(todo);
const testProjectGenerator = new ProjectComponent(testProject.getList());
const testProjectDOM = testProjectGenerator.generateProjectDOM();


const test = document.createElement('h1');

test.innerHTML = 'Hello WOrld';
console.log(testProjectDOM);
const main = new MainContent(testProjectDOM);
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
