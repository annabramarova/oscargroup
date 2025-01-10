import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { handleLoginSubmit } from '../fetch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const loginForm = document.querySelector('.js-login-form');

new Bouncer('.js-login-form', BouncerConfig);

loginForm.addEventListener('submit', async e => {
  e.preventDefault(); 

  const isValid = loginForm.checkValidity();
  if (isValid) {
    const email = loginForm.querySelector('#email-login').value; 
    const password = loginForm.querySelector('#password-login').value;  

    try {
      await handleLoginSubmit(email, password);
    } catch (error) {
      Notify.failure(
      'An error occurred while trying to log in. Please try again later.'
    );
    }
  } 
});