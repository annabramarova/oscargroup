document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document
      .querySelectorAll('.auth-tab')
      .forEach(t => t.classList.remove('active'));
    document
      .querySelectorAll('.auth-form')
      .forEach(form => form.classList.remove('active'));
    this.classList.add('active');
    document.querySelector(`.${this.dataset.tab}-form`).classList.add('active');
  });
});
