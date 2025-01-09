import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { handleLoginSubmit } from '../fetch';

const loginForm = document.querySelector('.js-login-form');
new Bouncer('.js-login-form', BouncerConfig);

loginForm.addEventListener('bouncerFormValid', async e => {
  e.preventDefault(); 
  
  await handleLoginSubmit(e); 
});
