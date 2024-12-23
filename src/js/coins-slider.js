document.addEventListener('DOMContentLoaded', function () {
  const sliderWrap = document.querySelector('.slider-markets-wrap');
  const slides = document.querySelectorAll('.markets-slide');

  // Дублируем слайды для бесконечной прокрутки
  const slidesClone = Array.from(slides).map(slide => slide.cloneNode(true));
  sliderWrap.append(...slidesClone);

  // Функция для регулирования скорости анимации
  function adjustAnimationSpeed() {
    const totalWidth = Array.from(slides).reduce(
      (acc, slide) => acc + slide.offsetWidth,
      0
    );
    const speed = totalWidth / 60; // Длительность одного прохода
    sliderWrap.style.animationDuration = `${speed}s`;
  }

  adjustAnimationSpeed();
  window.addEventListener('resize', adjustAnimationSpeed);
});
