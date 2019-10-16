export default class Header {
  constructor(title) {
    this.title = title;
  }

  createNav() {
    const nav = document.createElement('nav');
    const navWrapper = document.createElement('div');
    const logo = document.createElement('a');
    nav.className = 'purple darken-1';
    logo.textContent = `${this.title}`;
    logo.className = 'brand-logo center';
    nav.appendChild(navWrapper);
    navWrapper.appendChild(logo);
    return nav;
  }
}
