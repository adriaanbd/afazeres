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


const newProjBtn = document.querySelector('#new_project');

const generateProject = (project) => {
  project.addItem(todoitem);
  const projectGenerator = new ProjectComponent(project);
  const projectIdx = projects.getProjectIndex(project);
  const projectDOMid = `card-${projectIdx}`;
  const projectDOM = projectGenerator.generateProjectDOM(projectDOMid);
  const projectsNode = document.querySelector('#projects');
  projectsNode.appendChild(projectDOM);
  main.setContent(projectsNode);
  main.changeContent();
};

const generateProjects = (projects) => {
  projects.forEach((project) => {
    generateProject(project);
  });
  if (projects) addDeleteListeners();
};


const addDeleteListeners = () => {
  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { id } = btn.parentNode;
      projects.removeProject(id);
      const projectsNode = document.querySelector('#projects');
      while (projectsNode.firstChild) {
        projectsNode.removeChild(projectsNode.firstChild);
      }
      generateProjects(projects.getProjects());
      event.stopImmediatePropagation();
    });
  });
};

newProjBtn.addEventListener('click', () => {
  const title = document.querySelector('#form_title');
  const description = document.querySelector('#form_description');
  const project = new Project(title.value, description.value);
  projects.addProject(project);
  generateProject(project);
  addDeleteListeners();
});

// newTodobtn.addEventListener('click', () => {

// });
