import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';

// Получаем форму
const loginForm = document.querySelector('.js-login-form');

// Инициализируем Bouncer, передавая сам элемент формы
const loginFormValidation = new Bouncer('.js-login-form', BouncerConfig);

loginForm.addEventListener('submit', e => {
  
loginForm.addEventListener('submit', e => {
  if (!loginFormValidation.validate()) {
    e.preventDefault();
  }
});

});
