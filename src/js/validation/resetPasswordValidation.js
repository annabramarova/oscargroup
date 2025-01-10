import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const resetForm = document.querySelector('.js-reset-password-form');

new Bouncer('.js-reset-password-form', BouncerConfig);

resetForm.addEventListener('submit', async e => {
  e.preventDefault();

  const isValid = resetForm.checkValidity();
  if (isValid) {
    const email = resetForm.querySelector('#email-reset').value;

    try {
      await handleResetSubmit(email);
    } catch (error) {
      Notify.failure(
        'An error occurred while trying to reset password. Please try again later.'
      );
    }
  }
});