document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
  const showOnScroll = 200; 

  const toggleVisibility = () => {
    if (window.scrollY > showOnScroll) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  scrollToTopBtn.addEventListener('click', scrollToTop);
});
