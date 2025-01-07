const menuRefs = {
  menuBtn: document.querySelector('.js-burger-btn'),
  menuIcon: document.querySelector('.js-burger-icon'),
  menu: document.querySelector('.js-mobile-menu'),
};

let scrollPosition = 0; 

const toggleMobileMenu = () => {

  if (!menuRefs.menu.classList.contains('menu-open')) {
    openMenu();
  } else {
    closeMenu();
  }
};


const openMenu = () => {
  // Сохраняем текущую позицию прокрутки
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%'; 

  menuRefs.menuIcon.classList.add('burger-active');
  menuRefs.menu.classList.add('menu-open');
  setTimeout(() => {
    menuRefs.menu.classList.add('menu-bg');
  }, 200);
};

const closeMenu = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

  menuRefs.menuIcon.classList.remove('burger-active');
  menuRefs.menu.classList.remove('menu-bg');
  setTimeout(() => {
    menuRefs.menu.classList.remove('menu-open');
  }, 500);
};

menuRefs.menuBtn.addEventListener('click', toggleMobileMenu);

menuRefs.menu.addEventListener('click', e => {
  if (!e.target.matches('a')) return; 
  toggleMobileMenu();
});