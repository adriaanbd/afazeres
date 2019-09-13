import PageBuilder from './PageBuilder';
import TodoItemComponent from './ToDoItemComponent';

export default class ProjectComponent {
  constructor(todoItems) {
    this.pageBuilder = new PageBuilder();
    this.todoItems = todoItems;
    this.cardContent = this.pageBuilder.generateDiv('list-items');
    this.generateList = (() => {
      this.todoItems.forEach((item) => {
        const itemDOM = new TodoItemComponent(item);
        const div = itemDOM.generateItemDOM();
        this.cardContent.appendChild(div);
      });
    })();
  }

  generateProjectDOM() {
    const card = this.pageBuilder.generateCard(this.cardContent);
    return card;
  }
}
