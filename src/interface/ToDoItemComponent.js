import PageBuilder from './PageBuilder';

export default class TodoItemComponent {
  constructor(todoItem) {
    this.item = todoItem;
    this.pageBuilder = new PageBuilder();
  }

  generateItemDOM(projectId, id) {
    const itemWrap = this.pageBuilder.generateDiv('itemWrap');
    const liContent = this.pageBuilder.generateDiv('todo');
    const titleContent = `${this.item.getTitle()}`;
    // const titleContent = `${this.item.getTitle()} <a id=edit_${projectId}_${id} href="#editItem" class="modal-trigger"><i class="small edit_icon material-icons">edit</i></a><a id=${projectId}_${id} href="#"><i class="material-icons small bin_icon">delete</i></a>`;
    const buttonsWrap = this.pageBuilder.generateDiv('buttonsWrap');
    buttonsWrap.innerHTML = `<a id=edit_${projectId}_${id} href="#editItem" class="modal-trigger"><i class="small edit_icon material-icons">edit</i></a><a id=${projectId}_${id} href="#"><i class="material-icons small bin_icon">delete</i></a>`;
    const title = this.pageBuilder.generateHeader('5', titleContent);
    title.className = 'todo-header';
    const description = this.pageBuilder.generateDiv('description');
    description.innerHTML = `Description: ${this.item.getDescription()}`;
    const date = this.pageBuilder.generateDiv('due-date');
    date.innerHTML = `Date: ${this.item.getDueDate()}`;

    itemWrap.append(title, description, date);
    liContent.append(itemWrap, buttonsWrap);
    const li = this.pageBuilder.generateLi(liContent, 'collection-item');
    return li;
  }
}
