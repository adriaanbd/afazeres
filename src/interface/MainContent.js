import PageBuilder from './PageBuilder';

export default class MainContent {
  constructor(content) {
    this.pageBuilder = new PageBuilder();
    this.content = content;
    this.main = document.createElement('main');
    this.contentWrapper = this.pageBuilder.generateDiv('content', 'changing_content');
  }

  setContent(content) {
    this.content = content;
  }

  generateContent() {
    const div = document.querySelector('.content');
    const button = document.createElement('a');
    button.className = 'waves-effect waves-light btn modal-trigger';
    button.id = 'newProjectTrigger';
    button.href = '#newProject';
    const newProject = this.pageBuilder.generateDiv('modal', 'newProject');
    const form = document.createElement('form');
    form.className = 'modal-content';
    form.innerHTML = '<div class="row"><div class="input-field col s12"><input  id="form_title" type="text" class="validate"><label for="title">Title</label></div><div class="input-field col s12"><input id="form_description" type="text" class="validate"><label for="description">Description</label></div></div><div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat" id="new_project">Create New Project</a></div>';
    button.innerHTML = 'New Project';

    newProject.appendChild(form);
    this.main.append(button, newProject);
    if (div) this.main.removeChild(div);
    this.contentWrapper.appendChild(this.content);
    this.main.append(this.contentWrapper);
    return this.main;
  }

  // changeContent() {
  //   const div = document.querySelector('#changing_content');
  //   this.contentWrapper.appendChild(this.content);

  // }
}
