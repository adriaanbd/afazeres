import PageBuilder from './PageBuilder';
import TodoItemComponent from './ToDoItemComponent';

export default class ProjectComponent {
  constructor(project) {
    this.title = project.getTitle();
    this.pageBuilder = new PageBuilder();
    this.project = project;
    this.todoItems = project.getList();
    this.cardContent = this.pageBuilder.generateUl('collection with-header');
    this.generateList = () => {
      project.getList().forEach((item) => {
        const itemDOM = new TodoItemComponent(item);
        const li = itemDOM.generateItemDOM();
        this.cardContent.appendChild(li);
      });
    };
    this.generateToDoForm = () => {
      const newItem = this.pageBuilder.generateDiv('modal', 'newItem');
      const form = document.createElement('form');
      form.className = 'modal-content';
      form.innerHTML = '<div class="row"><div class="input-field col s12"><input  id="form_title" type="text" class="validate"><label for="title">Title</label></div><div class="input-field col s12"><input id="form_description" type="text" class="validate"><label for="description">Description</label></div></div><div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat" id="new_project">Create New Project</a></div>';
      newItem.appendChild(form);
      return newItem;
    };
  }

  generateProjectDOM(id) {
    const liHeaderArgs = ['', 'collection-header'];
    const deleteBtnArgs = ['remove_circle', 'deleteBtn', id];
    const addBtnArgs = ['add_circle', 'add_icon'];
    const [projectIdx] = id.match(/\d+$/);

    const header = this.pageBuilder.generateHeader(4, this.title);
    const collectionHeader = this.pageBuilder.generateLi(...liHeaderArgs);
    const deleteBtn = this.pageBuilder.generateButton(...deleteBtnArgs);
    const addBtn = this.pageBuilder.generateButton(...addBtnArgs);
    const card = this.pageBuilder.generateCard(this.cardContent, id);

    addBtn.id = `add_${projectIdx}`;
    addBtn.classList.add('modal-trigger', 'add_item');
    addBtn.href = '#newItem';

    collectionHeader.appendChild(header);
    collectionHeader.append(addBtn, deleteBtn);

    this.cardContent.appendChild(collectionHeader);

    return card;
  }
}
