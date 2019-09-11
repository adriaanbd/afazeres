import PageBuilder from './PageBuilder';

export default class TodoItemComponent {
  constructor() {
    this.pageBuilder = new PageBuilder();
    this.item = this.pageBuilder.generateDiv();
  }

  generateItemDOM() {
    return this.item;
  }
}
