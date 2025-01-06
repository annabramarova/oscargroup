document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
  const showOnScroll = 200; // Пиксели прокрутки для появления кнопки

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
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  // Слушатель прокрутки для отображения/скрытия кнопки
  window.addEventListener('scroll', toggleVisibility);

  // Слушатель клика по кнопке
  scrollToTopBtn.addEventListener('click', scrollToTop);
});
