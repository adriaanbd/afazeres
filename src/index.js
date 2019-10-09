import M from 'materialize-css';
import './sass/style.scss';
import TodoItem from './components/TodoItem';
import Project from './components/Project';
import Projects from './components/Projects';
import Header from './interface/Header';
import Footer from './interface/Footer';
import MainContent from './interface/MainContent';
import ProjectComponent from './interface/ProjectComponent';
import PageBuilder from './interface/PageBuilder';
import TodoItemComponent from './interface/ToDoItemComponent';

const appTitle = 'Afazeres';

const pb = new PageBuilder();
const projects = new Projects();
const header = new Header(appTitle);
const footer = new Footer(appTitle, 2019);

const projectsDiv = pb.generateDiv('projects', 'projects');
const content = document.querySelector('#content');
const main = new MainContent(projectsDiv);

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

const updateProjects = (project) => {
  const projectsNode = document.querySelector('#projects');
  projectsNode.appendChild(project);
  main.setContent(projectsNode);
  main.changeContent();
};

const generateProject = (project) => {
  const projectGenerator = new ProjectComponent(project);
  const projectIdx = projects.getProjectIndex(project);
  const projectDOMid = `card-${projectIdx}`;
  const projectDOM = projectGenerator.generateProjectDOM(projectDOMid);
  updateProjects(projectDOM);
};

const generateProjects = (projects) => {
  projects.forEach((project) => generateProject(project));
};

const removeProjectsFromDOM = () => {
  const projectsNode = document.querySelector('#projects');
  while (projectsNode.firstChild) {
    projectsNode.removeChild(projectsNode.firstChild);
  }
};

const addProject = () => {
  const title = document.querySelector('#form_title');
  const description = document.querySelector('#form_description');
  const project = new Project(title.value, description.value);
  projects.addProject(project);
  generateProject(project);
};

const removeProject = (element) => {
  const { id } = element.parentNode;
  projects.removeProject(id);
  removeProjectsFromDOM();
  generateProjects(projects.getProjects());
};

const generateItem = (item, projectId, todoId) => {
  const todoGenerator = new TodoItemComponent(item);
  const itemDOM = todoGenerator.generateItemDOM(projectId, todoId);
  return itemDOM;
};

const addItem = (projectId) => {
  const title = document.querySelector('#item_title');
  const description = document.querySelector('#item_description');
  const date = document.querySelector('#item_date');
  const todo = new TodoItem(title.value, description.value, date.value);
  const project = projects.getProjectByIndex(projectId);
  project.addItem(todo);
  const itemId = project.getItemIndex(todo);
  const itemDOM = generateItem(todo, projectId, itemId);
  const ul = document.querySelector(`#card-${projectId} .collection`);
  ul.appendChild(itemDOM);
};

const removeItem = (ids) => {
  const [projectId, todoItem] = ids;
  console.log(projectId, todoItem);
}

let newItemId;

document.addEventListener('click', (event) => {
  const node = event.target;
  if (node.matches('.deleteBtn')) {
    removeProject(node);
  } else if (node.matches('#new_project')) {
    addProject();
  } else if (node.matches('.add_icon')) {
    [newItemId] = node.parentNode.id.match(/\d+$/);
  } else if (node.matches('#new_item')) {
    addItem(newItemId);
  } else if (node.matches('.bin_icon')) {
    removeItem(node.parentNode.id.split('_'));
  }
}, false);
