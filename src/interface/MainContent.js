export default class MainContent {
  constructor(parent, content) {
    this.content = content;
    this.parent = parent;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}
