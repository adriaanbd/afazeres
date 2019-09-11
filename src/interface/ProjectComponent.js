import PageBuilder from './PageBuilder';
import TodoItemComponent from './ToDoItemComponent';

export default class ProjectComponent {
  constructor(todoItems) {
    this.pageBuilder = new PageBuilder();
    this.todoItems = todoItems;
    this.cardContent = this.pageBuilder.generateDiv();
    this.generateList = () => {
      todoItems.forEach((item) => {
        const div = new TodoItemComponent(item);
        this.cardContent.appendChild(div);
      });
    };
  }

  generateProjectDOM() {
    const card = this.pageBuilder.generateCard(this.cardContent);
    return card;
  }
}
