import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { handleLoginSubmit } from '../ajax';

// Отримуємо форму
const loginForm = document.querySelector('.js-login-form');

const loginFormValidation = new Bouncer('.js-login-form', BouncerConfig);

loginForm.addEventListener('submit', e => {
  if (!loginFormValidation.validate()) {
    e.preventDefault();
  } else {
    handleLoginSubmit(e);
  }
});