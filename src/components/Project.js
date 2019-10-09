export default class Project {
  constructor(title, description = '') {
    this.title = title;
    this.description = description;
    this.toDoList = [];
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  addItem(item) {
    this.toDoList.push(item);
  }

  removeItem(pos) {
    this.toDoList.splice(pos, 1);
  }

  getList() {
    return this.toDoList;
  }

  getItemByIndex(index) {
    return this.toDoList[index];
  }

  getItemIndex(item) {
    return this.toDoList.indexOf(item);
  }
}
