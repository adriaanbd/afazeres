export default class Footer {
  constructor(title, year) {
    this.footer = document.createElement('footer');
    this.p = document.createElement('p');
    this.footetText = () => `${title} &copy;${year}`;
  }

  generateFooter() {
    this.footer.className = 'section purple white-text center';
    this.p.className = 'flow-text';
    this.p.innerHTML = this.footetText();
    this.footer.appendChild(this.p);
    return this.footer;
  }
}
