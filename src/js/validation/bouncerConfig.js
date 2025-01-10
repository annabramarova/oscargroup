import Bouncer from 'formbouncerjs';

export const BouncerConfig = {
  fieldClass: 'error', // Applied to fields with errors
  errorClass: 'error-message', // Applied to the error message for invalid fields
  fieldPrefix: 'bouncer-field_', // If a field doesn't have a name or ID, one is generated with this prefix
  errorPrefix: 'bouncer-error_',
  validateOnBlur: true,
  validateOnSubmit: true,
  customMessages: {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    minLength: 'Phone number must be at least 8 characters long',
  },

  patterns: {
    email:
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
  },

  // Message Settings
  messageAfterField: true, // If true, displays error message below field. If false, displays it above.
  messageCustom: 'data-bouncer-message',

  messages: {
    missingValue: {
      checkbox: 'This field is required.',
      default: 'Fill out this field.',
    },
    patternMismatch: {
      email: 'Please enter a valid email address.',
      number: 'Please enter a number',
    },
    outOfRange: {
      over: 'Please select a value that is no more than {max}.',
      under: 'Please select a value that is no less than {min}.',
    },

    isValidPhone: 'Invalid number',
  },
};


export function initBouncer(formElement) {
  return new Bouncer(formElement, BouncerConfig);
}
