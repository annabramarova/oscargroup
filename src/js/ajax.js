import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function handleLoginSubmit(event) {
  event.preventDefault(); 

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  $.ajax({
    type: 'POST',
    url: `api.${url}/login`,
    data: {
      email: email,
      password: password,
    },
    success: function (resp) {
      if (resp.success) {
        window.location.href = resp.autologin; 
        Notify.success('Login successful! Redirecting...');
      } else {
        Notify.failure(resp.message); 
      }
    },
    error: function (error) {
      console.error('Error during login:', error);
      Notify.failure(
        'An error occurred while trying to log in. Please try again later.'
      ); 
    },
  });
}
