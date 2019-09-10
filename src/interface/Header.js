export default class Header {
  constructor(title) {
    this.title = title;
  }

  createNav() {
    const nav = document.createElement('nav');
    const navWrapper = document.createElement('div');
    const logo = document.createElement('a');
    logo.textContent = `${this.title}`;
    logo.className = 'brand-logo';
    nav.appendChild(navWrapper);
    navWrapper.appendChild(logo);
    return nav;
  }
}
