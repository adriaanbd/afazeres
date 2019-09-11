import PageBuilder from './PageBuilder';

export default class TodoItemComponent {
  constructor(todoItem) {
    this.pageBuilder = new PageBuilder();
    this.wrapper = this.pageBuilder.generateDiv();
  }

  generateItemDOM() {
    return this.item;
  }
}
