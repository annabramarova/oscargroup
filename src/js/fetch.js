import { Notify } from 'notiflix/build/notiflix-notify-aio';


export async function handleLoginSubmit(email, password) {
  try {
    const response = await fetch('https://api.oskargroup.live/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const resp = await response.json();

    if (resp.success) {
      Notify.success('Login successful! Redirecting...');
      window.location.href = resp.autologin;
    } else {
      Notify.failure(resp.message); 
    }
  } catch (error) {
    Notify.failure(
      'An error occurred while trying to log in. Please try again later.'
    );
  }
}