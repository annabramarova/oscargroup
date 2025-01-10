function toggleActiveTab(target) {
    
  document
    .querySelectorAll('.auth-tab')
    .forEach(tab => tab.classList.remove('active'));

  document
    .querySelectorAll('.auth-form')
    .forEach(form => form.classList.remove('active'));

  const tabName =
    target.dataset.tab ||
    (target.classList.contains('auth-tab') && target.dataset.tab);
  if (tabName) {
    const activeTab = document.querySelector(
      `.auth-tab[data-tab="${tabName}"]`
    );
    if (activeTab) {
      activeTab.classList.add('active');
    }

    const activeForm = document.querySelector(`.js-${tabName}-form`);
    if (activeForm) {
      activeForm.classList.add('active');
    }
  }
}

document.querySelectorAll('.auth-footer-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    toggleActiveTab(this);
  });
});

document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', function () {
    toggleActiveTab(this);
  });
});

document
  .querySelector('.js-forgot-password-link')
  .addEventListener('click', function (event) {
    event.preventDefault();
    toggleActiveTab({ dataset: { tab: 'reset-password' } });
  });