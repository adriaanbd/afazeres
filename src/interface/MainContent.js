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
    newProject.innerHTML = `
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>`;
    button.innerHTML = 'New Project';
    this.main.append(button, newProject);
    if (div) this.main.removeChild(div);
    this.contentWrapper.appendChild(this.content);
    this.main.append(this.contentWrapper);
    return this.main;
  }
}
