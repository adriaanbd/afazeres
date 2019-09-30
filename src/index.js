import M from 'materialize-css';
import TodoItem from './components/TodoItem';
import Project from './components/Project';
import Header from './interface/Header';
import Footer from './interface/Footer';
import MainContent from './interface/MainContent';
import ProjectComponent from './interface/ProjectComponent';

const content = document.querySelector('#content');

const appTitle = 'Afazeres';
const header = new Header(appTitle);
const footer = new Footer(appTitle, 2019);

const todo = new TodoItem('Todo 1', 'Something to do', 'a date');
const testProject = new Project('Test Project', 'Testing stuff');
testProject.addItem(todo);
const testProjectGenerator = new ProjectComponent(testProject);
const testProjectDOM = testProjectGenerator.generateProjectDOM();

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

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);
});

generateMainSkeleton();

const form = document.querySelector('form');
const newProjBtn = document.querySelector('#new_project');

newProjBtn.addEventListener('click', () => {
  const title = document.querySelector('#form_title');
  const description = document.querySelector('#form_description');
  const Proj = new Project(title.value, description.value);
  const ProjectGenerator = new ProjectComponent(Proj);
  const ProjectDOM = ProjectGenerator.generateProjectDOM();
  const main = new MainContent(ProjectDOM);
});
