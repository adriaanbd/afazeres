import PageBuilder from './PageBuilder';
import TodoItemComponent from './ToDoItemComponent';
import TodoItem from '../components/TodoItem';

export default class ProjectComponent {
  constructor(project) {
    this.title = project.getTitle();
    this.pageBuilder = new PageBuilder();
    this.project = project;
    this.todoItems = project.getList();
    this.cardContent = this.pageBuilder.generateUl('collection with-header');
    this.generateList = () => {
      project.getList().forEach((item) => {
        const itemDOM = new TodoItemComponent(item);
        const li = itemDOM.generateItemDOM();
        this.cardContent.appendChild(li);
      });
    };
    this.generateToDoForm = () => {
      const newItem = this.pageBuilder.generateDiv('modal', 'newItem');
      const form = document.createElement('form');
      form.className = 'modal-content';
      form.innerHTML = '<div class="row"><div class="input-field col s12"><input  id="form_title" type="text" class="validate"><label for="title">Title</label></div><div class="input-field col s12"><input id="form_description" type="text" class="validate"><label for="description">Description</label></div></div><div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat" id="new_project">Create New Project</a></div>';
      newItem.appendChild(form);
      return newItem;
    };
  }

  generateProjectDOM(id) {
    const header = this.pageBuilder.generateHeader(4, this.title);
    const deleteBtn = this.pageBuilder.generateButton('remove_circle', 'deleteBtn', id);
    const addBtn = this.pageBuilder.generateButton('add_circle', 'add_icon');
    addBtn.className = 'modal-trigger';
    addBtn.id = `add_${id}`;
    addBtn.href = '#newItem';
    // addBtn.addEventListener('click', (event) => {
    //   const title = document.querySelector('#item_title');
    //   const description = document.querySelector('#item_description');
    //   const date = document.querySelector('#item_date');
    //   const todo = new TodoItem(title.value, description.value, date.value);
    //   this.project.addItem(todo);
    //   // console.log(this.project);
    // });
    const collectionHeader = this.pageBuilder.generateLi('', 'collection-header');
    collectionHeader.appendChild(header);
    collectionHeader.append(addBtn, deleteBtn);
    this.cardContent.appendChild(collectionHeader);
    this.generateList();
    const card = this.pageBuilder.generateCard(this.cardContent, id);
    return card;
  }
}
