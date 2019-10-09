import PageBuilder from './PageBuilder';

export default class TodoItemComponent {
  constructor(todoItem) {
    this.item = todoItem;
    this.pageBuilder = new PageBuilder();
  }

  generateItemDOM(projectId, id) {
    const liContent = this.pageBuilder.generateDiv('todo');
    const titleContent = `${this.item.getTitle()} <a id=${projectId.concat('_').concat(id)} href='#'><i class="material-icons md-48 bin-icon">delete</i></a>`;
    const title = this.pageBuilder.generateHeader('5', titleContent);
    title.className = 'todo-header';
    const description = this.pageBuilder.generateDiv('description');
    description.innerHTML = `Description: ${this.item.getDescription()}`;
    const date = this.pageBuilder.generateDiv('title');
    date.innerHTML = `Date: ${this.item.getDueDate()}`;
    liContent.append(title, description, date);
    const li = this.pageBuilder.generateLi(liContent, 'collection-item');
    return li;
  }
}
