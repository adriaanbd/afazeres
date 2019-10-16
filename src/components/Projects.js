import Project from './Project';
import TodoItem from './TodoItem';

export default class Projects {
  constructor() {
    this.projectList = [];
    this.createProjectInstances = (projs) => {
      const projects = [];
      projs.forEach((proj) => {
        const items = [];
        proj.toDoList.forEach((item) => {
          items.push(new TodoItem(item.title, item.description, item.dueDate, item.priority, item.status));
        });
        projects.push(new Project(proj.title, proj.description, items));
      });
      return projects;
    };
  }

  addProject(project) {
    this.projectList.push(project);
  }

  getProjects() {
    return this.projectList;
  }

  setProjectsFromLocalStorage(projects) {
    this.projectList = this.createProjectInstances(projects);
  }


  getProjectByIndex(index) {
    return this.projectList[index];
  }

  getProjectIndex(project) {
    return this.projectList.indexOf(project);
  }

  removeProject(pos) {
    this.projectList.splice(pos, 1);
  }
}
