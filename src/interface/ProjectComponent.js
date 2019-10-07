import PageBuilder from './PageBuilder';
import TodoItemComponent from './ToDoItemComponent';

export default class ProjectComponent {
  constructor(project) {
    this.title = project.getTitle();
    this.pageBuilder = new PageBuilder();
    this.todoItems = project.getList();
    this.cardContent = this.pageBuilder.generateUl('collection with-header');
    this.generateList = () => {
      project.getList().forEach((item) => {
        const itemDOM = new TodoItemComponent(item);
        const li = itemDOM.generateItemDOM();
        this.cardContent.appendChild(li);
      });
    };
  }

  generateProjectDOM(id) {
    const header = this.pageBuilder.generateHeader(4, this.title);
    const deleteBtn = this.pageBuilder.generateButton('remove_circle', 'deleteBtn', id);
    const collectionHeader = this.pageBuilder.generateLi('', 'collection-header');
    collectionHeader.appendChild(header);
    collectionHeader.appendChild(deleteBtn);
    this.cardContent.appendChild(collectionHeader);
    this.generateList();
    const card = this.pageBuilder.generateCard(this.cardContent, id);
    return card;
  }
}
