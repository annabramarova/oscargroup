import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { handleRegistration } from '../fetch';

// Initialize intl-tel-input for phone validation
const phoneInput = document.querySelector('#phone-register');

const iti = intlTelInput(phoneInput, {
  initialCountry: 'tr',
  separateDialCode: true,
  useFullscreenPopup: false,
  geoIpLookup: function (callback) {
    fetch('https://ipapi.co/json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        callback(data.country_code);
      })
      .catch(function () {
        callback('us');
      });
  },
  utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js',
});

// Form selector
const registrationForm = document.querySelector('.js-registration-form');

// Initialize Bouncer for form validation
new Bouncer('.js-registration-form', BouncerConfig);

// Handle form submission
registrationForm.addEventListener('submit', async e => {
  e.preventDefault();

  // Remove any existing error messages
  const errorMessages = registrationForm.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.remove());

  // Check general form validity with Bouncer
  const isValid = registrationForm.checkValidity();

  // Check phone validation
  const phoneIsValid = iti.isValidNumber(); // Add phone validation here

  // Password match check
  const password = registrationForm.querySelector('#password-register').value;
  const confirmPassword =
    registrationForm.querySelector('#confirm-register').value;

  if (password !== confirmPassword) {
    const confirmPasswordInput =
      registrationForm.querySelector('#confirm-register');
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = 'Passwords do not match';
    confirmPasswordInput.parentElement.appendChild(errorElement);
    return;
  }

  if (isValid && phoneIsValid) {
    const formData = new FormData(registrationForm);
    const registrationData = Object.fromEntries(formData.entries());

    try {
      await handleRegistration(registrationData);
      Notify.success('Registration successful!');
      registrationForm.reset();
      iti.setCountry('tr');
    } catch (error) {
      Notify.failure(
        'An error occurred during registration. Please try again.'
      );
    }
  } else {
    Notify.failure('Please fill out all required fields correctly.');
  }
});


// Restrict input for name and last name (no digits allowed)
const fnameInput = document.querySelector('#fname-register');
const snameInput = document.querySelector('#sname-register');

function removeDigits(event) {
  event.target.value = event.target.value.replace(/\d/g, ''); // Replace digits with an empty string
}

fnameInput.addEventListener('input', removeDigits);
snameInput.addEventListener('input', removeDigits);

// Restrict input for phone (only digits allowed)
const phoneInputField = document.querySelector('#phone-register');

phoneInputField.addEventListener('input', function (event) {
  const currentValue = event.target.value;
  // Allow only digits for phone number input
  event.target.value = currentValue.replace(/\D/g, ''); // Replace non-digit characters with an empty string
});