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

const generateItem = (item, projectId, todoId) => {
  const todoGenerator = new TodoItemComponent(item);
  const itemDOM = todoGenerator.generateItemDOM(projectId, todoId);
  return itemDOM;
};

const generateProjectItemDOM = (projectId) => {
  const project = projects.getProjectByIndex(projectId);
  const items = project.getList();
  const ul = document.querySelector(`#card-${projectId} .collection`);
  items.forEach((item) => {
    const itemId = project.getItemIndex(item);
    const itemArgs = [item, projectId, itemId];
    const itemDOM = generateItem(...itemArgs);
    ul.appendChild(itemDOM);
  });
};

const generateProject = (project) => {
  const projectGenerator = new ProjectComponent(project);
  const projectIdx = projects.getProjectIndex(project);
  const projectDOMid = `card-${projectIdx}`;
  const projectDOM = projectGenerator.generateProjectDOM(projectDOMid);
  updateProjects(projectDOM);
  generateProjectItemDOM(projectIdx);
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


const getItemFormValues = (edit = false) => {
  const title = edit === false ? document.querySelector('#item_title') : document.querySelector('#edit_item_title');
  const description = edit === false ? document.querySelector('#item_description') : document.querySelector('#edit_item_description');
  const date = edit === false ? document.querySelector('#item_date') : document.querySelector('#edit_item_date');
  return [title, description, date].map((element) => element.value);
};

const addItem = (projectId) => {
  const itemFormValues = getItemFormValues();
  const todo = new TodoItem(...itemFormValues);
  const project = projects.getProjectByIndex(projectId);
  project.addItem(todo);
  const itemId = project.getItemIndex(todo);
  const itemDOM = generateItem(todo, projectId, itemId);
  const ul = document.querySelector(`#card-${projectId} .collection`);
  ul.appendChild(itemDOM);
};

const removeItemDOM = (projectId) => {
  const queryStr = `#card-${projectId} .collection-item`;
  const items = document.querySelectorAll(queryStr);
  for (let i = 0; i < items.length; i += 1) { items[i].remove(); }
};


const removeItem = (ids) => {
  const [projectId, todoItemId] = ids;
  const project = projects.getProjectByIndex(projectId);
  project.removeItem(todoItemId);
  removeItemDOM(projectId);
  generateProjectItemDOM(projectId);
};

const setFormValues = (todo) => {
  const title = document.querySelector('#edit_item_title');
  const description = document.querySelector('#edit_item_description');
  const date = document.querySelector('#edit_item_date');
  title.value = todo.getTitle();
  description.value = todo.getDescription();
  date.value = todo.getDueDate();
};

const updateItemValues = (title, description, date, projectId, itemId) => {
  const titles = document.querySelectorAll(`#card-${projectId} .todo h5`);
  const descriptions = document.querySelectorAll(`#card-${projectId} .todo .description`);
  const dates = document.querySelectorAll(`#card-${projectId} .todo .due-date`);
  titles[itemId].innerText = title;
  descriptions[itemId].innerText = description;
  dates[itemId].innerText = date;
};

const handleEdit = (todo, projectId, todoItemId) => {
  const itemFormValues = getItemFormValues(true);
  const [title, description, date] = itemFormValues;
  todo.setTitle(title);
  todo.setDescription(description);
  todo.setDueDate(date);
  updateItemValues(title, description, date, projectId, todoItemId);
};

const editItem = (ids) => {
  const [projectId, todoItemId] = ids;
  const project = projects.getProjectByIndex(projectId);
  const todo = project.getItemByIndex(todoItemId);
  setFormValues(todo);
  const editItemBtn = document.querySelector('#edit_item');
  editItemBtn.addEventListener('click', () => {
    handleEdit(todo, projectId, todoItemId);
  });
};

let projectID;

document.addEventListener('click', (event) => {
  const node = event.target;
  if (node.matches('.deleteBtn')) {
    removeProject(node);
  } else if (node.matches('#new_project')) {
    addProject();
  } else if (node.matches('.add_icon')) {
    [projectID] = node.parentNode.id.match(/\d+$/);
  } else if (node.matches('#new_item')) {
    addItem(projectID);
  } else if (node.matches('.bin_icon')) {
    removeItem(node.parentNode.id.split('_'));
  } else if (node.matches('.edit_icon')) {
    editItem(node.parentNode.id.split('_').slice(-2));
  }
}, false);
