import M from 'materialize-css';
import TodoItem from './components/TodoItem';
import Project from './components/Project';
import Projects from './components/Projects';
import Header from './interface/Header';
import Footer from './interface/Footer';
import MainContent from './interface/MainContent';
import ProjectComponent from './interface/ProjectComponent';
import PageBuilder from './interface/PageBuilder';

const pb = new PageBuilder();

const content = document.querySelector('#content');

const appTitle = 'Afazeres';
const header = new Header(appTitle);
const footer = new Footer(appTitle, 2019);

const todo = new TodoItem('Todo 1', 'Something to do', 'a date');
const testProject = new Project('Test Project', 'Testing stuff');
const projectsDiv = pb.generateDiv('projects', 'projects');
testProject.addItem(todo);
const testProjectGenerator = new ProjectComponent(testProject);
const testProjectDOM = testProjectGenerator.generateProjectDOM();
projectsDiv.appendChild(testProjectDOM);

const main = new MainContent(projectsDiv);
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

const newProjBtn = document.querySelector('#new_project');

const projects = new Projects();
let deleteBtns = document.querySelectorAll('.deleteBtn');

const addDeleteListeners = () => {
  deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = document.querySelector(`#card-${btn.id}`);
      card.remove();
      projects.removeProject(btn.id); // generate cards || projectDOM again because splice changes indexes when modifying array in place
    });
  });
};

newProjBtn.addEventListener('click', () => {
  const title = document.querySelector('#form_title');
  const description = document.querySelector('#form_description');
  const proj = new Project(title.value, description.value);
  projects.addProject(proj);

  const projectGenerator = new ProjectComponent(proj);
  const projectIdx = projects.getProjectIndex(proj);
  const projectDOM = projectGenerator.generateProjectDOM();
  projectDOM.id = `card-${projectIdx}`;

  const delBtn = projectDOM.querySelector('.deleteBtn');
  delBtn.id = projectIdx;

  projectsDiv.appendChild(projectDOM);
  main.setContent(projectsDiv);
  main.changeContent();

  addDeleteListeners();
});
