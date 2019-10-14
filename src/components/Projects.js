export default class Projects {
  constructor() {
    this.projectList = [];
  }

  addProject(project) {
    this.projectList.push(project);
  }

  getProjects() {
    return this.projectList;
  }

  setProjects(projects) {
    this.projectList = projects;
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
