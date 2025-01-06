const faqItems = document.querySelectorAll('[data-faq]');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      faqItems.forEach(el => {
        el.classList.remove('active');
      });

      item.classList.add('active');
    }
  });
});
