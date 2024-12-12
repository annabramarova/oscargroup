const menuRefs = {
  menuBtn: document.querySelector('.js-burger-btn'),
  menuIcon: document.querySelector('.js-burger-icon'),
  menu: document.querySelector('.js-mobile-menu'),
};

const toggleMobileMenu = () => {
  if (window.innerWidth >= 1280) {
    return;
  }

  if (!menuRefs.menu.classList.contains('menu-open')) {
    openMenu();
  } else {
    closeMenu();
  }
};

const openMenu = () => {
  menuRefs.menuIcon.classList.add('burger-active');
  menuRefs.menu.classList.add('menu-open');
  toggleScrolling();
  setTimeout(() => {
    menuRefs.menu.classList.add('menu-bg');
  }, 200);
};

const closeMenu = () => {
  menuRefs.menuIcon.classList.remove('burger-active');
  menuRefs.menu.classList.remove('menu-bg');
  toggleScrolling();
  setTimeout(() => {
    menuRefs.menu.classList.remove('menu-open');
  }, 500); 
};

const toggleScrolling = () => {
  const scroll = document.body.scrollWidth;
  document.body.classList.toggle('is-menu-open');
  const noScroll = document.body.scrollWidth;

  const menuOpen = document.body.classList.contains('is-menu-open');

  if (menuOpen) {
    document.body.style.paddingRight = `${noScroll - scroll}px`;
  } else {
    document.body.style.paddingRight = '0px';
  }
};

menuRefs.menuBtn.addEventListener('click', toggleMobileMenu);

menuRefs.menu.addEventListener('click', e => {
  if (!e.target.matches('a')) return;
  toggleMobileMenu();
});
