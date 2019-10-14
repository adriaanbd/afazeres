import PageBuilder from './PageBuilder';

export default class MainContent {
  constructor(content = null) {
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
    const newItem = this.pageBuilder.generateDiv('modal', 'newItem');
    const toDoForm = document.createElement('form');
    toDoForm.className = 'modal-content';
    toDoForm.innerHTML = `
    <div class="row">
      <div class="input-field col s12">
        <input  id="item_title" type="text" class="validate">
        <label for="item_title">Title</label>
      </div>
      <div class="input-field col s12">
        <input id="item_description" type="text" class="validate">
        <label for="item_description">Description</label>
      </div>
      <div class="input-field col s12">
        <input  id="item_date" type="date" class="validate">
        <label for="item_date">Due date</label>
      </div>
      <div class="input-field col s12">
        <select id="item_priority">
          <option value="" disabled selected>Choose priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="none">None</option>
        </select>
        <label for="item_priority">Priority</label>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" id="new_item">Add New Item</a>
    </div>`;
    newItem.appendChild(toDoForm);
    const editItem = this.pageBuilder.generateDiv('modal', 'editItem');
    const toDoEditForm = document.createElement('form');
    toDoEditForm.className = 'modal-content';
    toDoEditForm.innerHTML = `
    <div class="row">
      <div class="input-field col s12">
        <input  id="edit_item_title" type="text" class="validate">
        <label for="item_title">Title</label>
      </div>
      <div class="input-field col s12">
        <input id="edit_item_description" type="text" class="validate">
        <label for="edit_item_description">Description</label>
      </div>
      <div class="input-field col s12">
        <input  id="edit_item_date" type="date" class="validate"><label for="item_date">Title</label>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" id="edit_item">Edit Item</a>
    </div>`;
    editItem.appendChild(toDoEditForm);


    newProject.appendChild(form);
    this.main.append(button, newProject, newItem, editItem);
    if (div) this.main.removeChild(div);
    this.contentWrapper.appendChild(this.content);
    this.main.append(this.contentWrapper);
    return this.main;
  }

  changeContent() {
    const div = document.querySelector('#changing_content');
    if (div) this.main.removeChild(div);
    this.contentWrapper.appendChild(this.content);
    this.main.append(this.content);
    return this.main;
  }
}
