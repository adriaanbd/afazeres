export default class PageBuilder {
  constructor() {
    this.createDiv = (divClass, divID) => {
      const div = document.createElement(div);
      div.className = divClass;
      div.id = divID;
      return div;
    };

    this.createP = (content, pClass) => {
      const p = document.createElement('p');
      p.className = pClass;
      p.innerHTML = content;
      return p;
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
}
