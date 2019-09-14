import PageBuilder from './PageBuilder';
import TodoItemComponent from './ToDoItemComponent';

export default class ProjectComponent {
  constructor(project) {
    this.title = project.getTitle();
    this.pageBuilder = new PageBuilder();
    this.todoItems = project.getList();
    this.cardContent = this.pageBuilder.generateUl('collection with-header');
    this.generateList = () => {
      this.todoItems.forEach((item) => {
        const itemDOM = new TodoItemComponent(item);
        const li = itemDOM.generateItemDOM();
        this.cardContent.appendChild(li);
      });
    };
  }

  generateProjectDOM() {
    const header = this.pageBuilder.generateHeader(4, this.title);
    const collectionHeader = this.pageBuilder.generateLi('', 'collection-header');
    collectionHeader.appendChild(header);
    this.cardContent.appendChild(collectionHeader);
    this.generateList();
    const card = this.pageBuilder.generateCard(this.cardContent);
    return card;
  }
}
