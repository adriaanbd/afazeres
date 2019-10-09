import PageBuilder from './PageBuilder';

export default class TodoItemComponent {
  constructor(todoItem) {
    this.item = todoItem;
    this.pageBuilder = new PageBuilder();
  }

  generateItemDOM() {
    const liContent = this.pageBuilder.generateDiv('todo');
    const titleContent = `${this.item.getTitle()} <a href='#'><i class="material-icons md-48">delete</i></a>`;
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
