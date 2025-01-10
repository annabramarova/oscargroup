import { Notify } from 'notiflix/build/notiflix-notify-aio';

const url = 'oskargroup.live';

export async function handleLoginSubmit(email, password) {
  try {
    const response = await fetch(`https://api.${url}/login`, {
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


/**
 * Handles the password reset request by sending an email.
 * @param {string} email - The email address to send the reset link.
 */
export async function handleResetSubmit(email) {
  try {
    const response = await fetch(`https://api.${url}/reset-password/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const resp = await response.json();

    if (resp.success) {
      Notify.success(
        'Password reset email sent! Please check your inbox for further instructions.'
      );
    } else {
      Notify.failure(resp.message || 'Failed to send reset email.');
    }
  } catch (error) {
    Notify.failure(
      'An error occurred while trying to reset the password. Please try again later.'
    );
  }
}

export async function handleRegistration(formData) {
  try {
    const response = await fetch(`https://api.${url}/reg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const resp = await response.json();

    if (resp.success) {
      Notify.success('Registration successful! Redirecting...');
      window.location.href = resp.autologin;
    } else {
      Notify.failure(resp.message);
    }
  } catch (error) {
    Notify.failure(
      'An error occurred during registration. Please try again later.'
    );
  }
}