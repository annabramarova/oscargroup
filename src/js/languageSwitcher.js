document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const customSelect = document.querySelector('.custom-select');
  const options = document.querySelectorAll('.custom-option');
  const trigger = document.querySelector('.custom-select-trigger');

  languageSwitcher.addEventListener('click', function () {
    customSelect.classList.toggle('open');
  });

  options.forEach(option => {
    option.addEventListener('click', function (event) {
      const selectedLang = event.target.getAttribute('data-value');
      const selectedText = event.target.textContent;

      trigger.textContent = selectedText;

      customSelect.classList.remove('open');
    });
  });

  document.addEventListener('click', function (event) {
    if (!customSelect.contains(event.target)) {
      customSelect.classList.remove('open');
    }
  });
});
