window.addEventListener('scroll', function () {
  const diagram = document.querySelector('.advantage-diagram');
  const rect = diagram.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    diagram.style.height = '95px';
  } else {
    diagram.style.height = '0';
  }
});
