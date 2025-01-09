import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const registrationForm = document.querySelector('.js-registration-form');
const registrationFormValidation = new Bouncer(
  '.js-registration-form',
  BouncerConfig
);
const phoneInput = document.querySelector('#phone-register');
const passwordInput = document.querySelector('#password-register');
const confirmPasswordInput = document.querySelector('#confirm-register');
const iti = intlTelInput(phoneInput, {
  initialCountry: 'tr',
  separateDialCode: true,
  geoIpLookup: callback => {
    fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback('us'));
  },
  utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js',
});

const errorMessages = {
  0: 'Invalid phone number',
  1: 'Invalid country code',
  2: 'Too short',
  3: 'Too long',
  4: 'Invalid number format',
};

// Restrict digits in name inputs
const nameInput = document.querySelector('#name-register');
const lastNameInput = document.querySelector('#last-name-register');

[nameInput, lastNameInput].forEach(input => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\d/g, '');
  });
});

// Validate phone input
phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, '');
  if (iti.isValidNumber()) {
    phoneInput.setCustomValidity('');
  }
});

// Validate password match
const validatePasswords = () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('Passwords do not match');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
};

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);

// Handle form submission
registrationForm.addEventListener('submit', e => {
  
  loginForm.addEventListener('bouncerFormValid', async () => {
        const email = loginForm.querySelector('#email-login').value; 
        const password = loginForm.querySelector('#password-login').value;  
  
        await handleLoginSubmit(email, password);
      });
});
