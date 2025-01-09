import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { handleLoginSubmit } from '../fetch';

const loginForm = document.querySelector('.js-login-form');

  console.log(loginForm);
const bouncer = new Bouncer('.js-login-form', BouncerConfig);

loginForm.addEventListener('submit', async e => {
  e.preventDefault();

    loginForm.addEventListener('bouncerFormValid', async () => {
      const email = loginForm.querySelector('#email-login').value; 
      const password = loginForm.querySelector('#password-login').value;  

      await handleLoginSubmit(email, password);
    });
});
