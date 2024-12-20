import i18next from 'i18next';


document
  .querySelector('.custom-select-trigger')
  .addEventListener('click', function () {
    document.querySelector('.custom-select').classList.toggle('open');
  });

document.querySelectorAll('.custom-option').forEach(function (option) {
  option.addEventListener('click', function () {
    const value = option.getAttribute('data-value');
    const displayText = option.textContent;
    document.querySelector('.custom-select-trigger').textContent = displayText;

    i18next.changeLanguage(value, () => {
      updateText();
    });

    document.querySelector('.custom-select').classList.remove('open');
  });
});

function updateText() {
  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}
