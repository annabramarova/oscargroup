import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { handleLoginSubmit } from '../fetch';

const loginForm = document.querySelector('.js-login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault(); 

    const email = loginForm.querySelector('#email-login').value;
    const password = loginForm.querySelector('#password-login').value;


    handleLoginSubmit(email, password)
      .then(response => {
        console.log('Form submitted successfully:', response);
      })
      .catch(error => {
        console.error('Error during form submission:', error);
      });
});