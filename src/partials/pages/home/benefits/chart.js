window.addEventListener('scroll', function () {
  const diagram = document.querySelector('.benefits-diagram');
  const rect = diagram.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    diagram.style.height =
      rect.top <= windowHeight && rect.bottom >= 0 ? '60px' : '0';
  } else {
    diagram.style.height =
      rect.top <= windowHeight && rect.bottom >= 0 ? '200px' : '0';
  }
});
