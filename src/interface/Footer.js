import PageBuilder from './PageBuilder';

export default class Footer {
  constructor(title, year) {
    this.footer = document.createElement('footer');
    this.footerText = () => `${title} &copy;${year}`;
    this.pageBuilder = new PageBuilder();
  }

  generateFooter() {
    const p = this.pageBuilder.generateP(this.footerText(), 'flow-text');
    this.footer.className = 'section purple darken-1 white-text center';
    this.footer.appendChild(p);
    return this.footer;
  }
}
