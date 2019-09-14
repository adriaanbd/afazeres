export default class PageBuilder {
  constructor() {
    this.createDiv = (divClass, divID) => {
      const div = document.createElement('div');
      div.className = divClass;
      if (divID) div.id = divID;
      return div;
    };

    this.createP = (content, pClass) => {
      const p = document.createElement('p');
      p.className = pClass;
      p.innerHTML = content;
      return p;
    };

    this.createUl = (ulClass, id) => {
      const ul = document.createElement('ul');

      if (ulClass) ul.className = ulClass;
      if (id) ul.id = id;

      return ul;
    };

    this.createLi = (content, liClass, id) => {
      const li = document.createElement('li');

      if (content) li.innerHTML = content;
      if (liClass) li.className = liClass;
      if (id) li.id = id;

      return li;
    };

    this.createHeader = (size, content) => {
      const header = document.createElement(`h${size}`);
      if (content) header.innerHTML = content;
      console.log(header);
      return header;
    };
  }

  generateDiv(divClass = '', divID = '') {
    return this.createDiv(divClass, divID);
  }

  generateCard(content, cardID = '') {
    const card = this.createDiv('card', cardID);
    const cardContent = this.createDiv('card-content');
    cardContent.appendChild(content);
    card.appendChild(cardContent);
    return card;
  }

  generateP(content, pClass = '') {
    return this.createP(content, pClass);
  }

  generateUl(ulClass = '', id = '') {
    return this.createUl(ulClass, id);
  }

  generateLi(content = '', liClass = '', id = '') {
    return this.createLi(content, liClass, id);
  }

  generateHeader(size, content = '') {
    return this.createHeader(size, content);
  }
}
