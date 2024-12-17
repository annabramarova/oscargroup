import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const contactFormValidation = new Bouncer('.js-contact-form', BouncerConfig);
const phoneInput = document.querySelector('input[name="phone"]');
const nameInput = document.querySelector('input[name="name"]'); // Add name input reference

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

// Prevent digits in the name field
nameInput.addEventListener('input', () => {
  nameInput.value = nameInput.value.replace(/\d/g, '');
});

phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, ''); 
  if (iti.isValidNumber()) {
    phoneInput.setCustomValidity('');
  }
});

const form = document.querySelector('.js-contact-form');

form.addEventListener('submit', e => {
  let isFormValid = true;

  // Validate phone number
  if (!iti.isValidNumber()) {
    isFormValid = false;
    const error = iti.getValidationError();
    phoneInput.setCustomValidity(
      errorMessages[error] || 'Invalid phone number'
    );
  }

  if (!isFormValid) {
    e.preventDefault();
  } else {
    contactFormValidation.validate(); 
  }
});
