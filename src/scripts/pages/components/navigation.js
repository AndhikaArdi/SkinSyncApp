export default class Navigation {
  constructor() {
    this.drawer = null;
    this.hamburger = null;
    this.navbar = null;
  }

  render() {
    return `
      <div class="navbar">
        <a href="#/" class="navbar-logo">Skin<span>Sync</span>.</a>

        <div class="navbar-nav">
          <a href="#/">Home</a>
          <a href="#/about">About</a>
          <a href="#/analyze">Analyze</a>
          <a href="#/contact">Contact</a>
          <a href="#/signin">Sign In</a>
        </div>

        <div class="navbar-extra">
          <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
        </div>
      </div>
    `;
  }

  afterRender() {
    this.navbar = document.querySelector('.navbar');
    this.drawer = document.querySelector('.navbar-nav');
    this.hamburger = document.querySelector('#hamburger-menu');

    if (!this.drawer || !this.hamburger || !this.navbar) return;

    this._setupEventListeners();
  }

  _setupEventListeners() {
    this.hamburger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.toggleDrawer();
    });

    document.addEventListener('click', (event) => {
      const isClickInsideNavbar = this.navbar.contains(event.target);
      const isClickInsideDrawer = this.drawer.contains(event.target);

      if (!isClickInsideNavbar && !isClickInsideDrawer && this.drawer.classList.contains('active')) {
        this.closeDrawer(); // Tutup drawer jika klik di luar menu
      }
    });

    this.drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => { // Tutup drawer saat klik link
        this.closeDrawer();
      });
    });
  }
  

  toggleDrawer() {
    this.drawer.classList.toggle('active');
  }

  closeDrawer() {
    this.drawer.classList.remove('active');
  }
}
