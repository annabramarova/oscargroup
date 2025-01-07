import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';

// Получаем форму
const loginForm = document.querySelector('.js-login-form');

// Инициализируем Bouncer, передавая сам элемент формы
const loginFormValidation = new Bouncer('.js-login-form', BouncerConfig);

loginForm.addEventListener('submit', e => {
  // Прекращаем отправку формы, чтобы сначала пройти валидацию
  e.preventDefault();

  // Запускаем валидацию с Bouncer
  const isValid = loginFormValidation.validate();

  // Если форма прошла валидацию, отправляем ее
  if (isValid) {
    loginForm.submit();
  }
});
