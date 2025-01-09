import { Notify } from 'notiflix/build/notiflix-notify-aio';

const url = 'oskargroup.live';

export async function handleLoginSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  try {
    const response = await fetch(`https://api.${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const resp = await response.json();
    if (resp.success) {
      Notify.success('Login successful! Redirecting...');
      window.location.href = resp.autologin;
    } else {
      Notify.failure(resp.message); 
    }
  } catch (error) {
    console.error('Error during login:', error);
    Notify.failure(
      'An error occurred while trying to log in. Please try again later.'
    );
  }
}
