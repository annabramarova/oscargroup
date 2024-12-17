export const BouncerConfig = {
  // Classes & IDs
  fieldClass: 'error', // Applied to fields with errors
  errorClass: 'error-message', // Applied to the error message for invalid fields
  fieldPrefix: 'bouncer-field_', // If a field doesn't have a name or ID, one is generated with this prefix
  errorPrefix: 'bouncer-error_', // Prefix used for error message IDs

  // Patterns
  patterns: {
    pattern: /^[+]?[0-9\s\-\(\)]{1,20}$/,

    // Name: Allow letters (both Latin and Cyrillic) and spaces
    name: /^[A-Za-zА-Яа-я\s]{2,50}$/,

    // Email: No changes needed unless there are specific character restrictions for the domain
    email:
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
    url: /^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
    number: /[-+]?[0-9]*[.,]?[0-9]+/,
    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
    time: /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])/,
  },

  // Message Settings
  messageAfterField: true,
  messageCustom: 'data-bouncer-message',
  messageTarget: 'data-bouncer-target',

  // Error messages
  messages: {
    missingValue: {
      phone: 'Please enter a valid phone number.',
      name: 'Please enter your full name.',
      email: 'Please enter a valid email address.',
      message: 'Please enter your message.',
      default: 'This field is required.',
    },
    patternMismatch: {
      name: 'Please enter a valid name using only letters and spaces.',
      phone: 'Please enter a valid phone number.',
      email: 'Please enter a valid email address.',
      message: 'Please enter a valid message.',
      default: 'Please match the requested format.',
    },
    outOfRange: {
      over: 'Please select a value that is no more than {max}.',
      under: 'Please select a value that is no less than {min}.',
    },
    wrongLength: {
      over: 'Please shorten this text to no more than {maxLength} characters.',
      under: 'Please lengthen this text to {minLength} characters or more.',
    },
  },

  // Disable submit
  disableSubmit: true,
};