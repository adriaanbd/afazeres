import PageBuilder from './PageBuilder';

export default class TodoItemComponent {
  constructor(todoItem) {
    this.item = todoItem;
    this.pageBuilder = new PageBuilder();
    this.wrapper = this.pageBuilder.generateDiv('list-item');
  }

  generateItemDOM() {
    const p = document.createElement('p');
    p.innerHTML = `Title: ${this.item.getTitle()}`;
    this.wrapper.appendChild(p);
    return this.wrapper;
  }
}
