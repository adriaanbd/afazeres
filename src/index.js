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

const appTitle = 'Afazeres';

const pb = new PageBuilder();
const projects = new Projects();
const header = new Header(appTitle);
const footer = new Footer(appTitle, 2019);
const todoitem = new TodoItem('go to store', 'someone needsto go to the store to buy groceries', 'date is the is date');

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
  project.addItem(todoitem);
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

const removeProject = (id) => {
  projects.removeProject(id);
  removeProjectsFromDOM();
  generateProjects(projects.getProjects());
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    const { id } = event.target.parentNode;
    removeProject(id);
  } else if (event.target.id === 'new_project') {
    addProject();
  }
}, false);
