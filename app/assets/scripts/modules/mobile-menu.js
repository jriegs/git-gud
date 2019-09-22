class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.menuIcon = document.querySelector('.site-header__menu-icon');   
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));        
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__menu-content--visible');        
        this.siteHeader.classList.toggle('site-header--expanded');
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    }
}

export default MobileMenu;