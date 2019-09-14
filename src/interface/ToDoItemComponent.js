import PageBuilder from './PageBuilder';

export default class TodoItemComponent {
  constructor(todoItem) {
    this.item = todoItem;
    this.pageBuilder = new PageBuilder();
    // this.wrapper = this.pageBuilder.generateDiv('list-item');
  }

  generateItemDOM() {
    const liContent = `Title: ${this.item.getTitle()}`;
    const li = this.pageBuilder.generateLi(liContent, 'collection-item');

    return li;
  }
}
