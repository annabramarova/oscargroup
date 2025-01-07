/* USER AUTHENTICATION AND REGISTRATION */

/* Check if User is Authenticated */
$.ajax({
  type: 'GET',
  url: `${url}/${locale}/isAuth`,
  crossDomain: true,
  xhrFields: {
    withCredentials: true,
  },
  success: function (resp) {
    if (resp) {
      console.log(resp.Data); // User data: name, surname, balance
      console.log(resp.autologin); // Login link for the platform
    }
  },
  error: function (err) {
    console.error('Authentication check failed:', err);
  },
});

/* Logout User */
$.ajax({
  type: 'GET',
  url: `${url}/logout`,
  xhrFields: {
    withCredentials: true,
  },
  success: function (resp) {
    console.log('Logout response:', resp); // true or false
  },
  error: function (err) {
    console.error('Logout failed:', err);
  },
});

/* User Login */
$.ajax({
  type: 'POST',
  url: `api.${url}/login`, // URL must be preceded by "api."
  data: {
    email: email,
    password: password, // Must be at least 8 characters
  },
  success: function (resp) {
    if (resp.success) {
      console.log(resp.autologin); // Login link for the platform
    } else {
      console.error('Login error:', resp.message); // Error message
    }
  },
  error: function (err) {
    console.error('Login request failed:', err);
  },
});

/* User Registration */
const registrationData = [
  { name: 'fname', value: 'Name' },
  { name: 'sname', value: 'Surname' },
  { name: 'phone', value: '0631234567' },
  { name: 'email', value: 'email@email.email' },
  { name: 'password', value: 'password' }, // Password must be at least 8 characters
  { name: 'promocode', value: 'promocode' }, // Optional parameter
];

$.ajax({
  type: 'POST',
  url: `api.${url}/reg`, // URL must be preceded by "api."
  data: {
    data: registrationData,
    country: country, // Required (e.g., "Ukraine, Poland")
  },
  success: function (resp) {
    if (resp.success) {
      console.log(resp.Data); // User data: name, surname, balance
      console.log(resp.autologin); // Login link for the platform
    } else {
      console.error('Registration error:', resp.message); // Error message
    }
  },
  error: function (err) {
    console.error('Registration request failed:', err);
  },
});

/* Reset Password - Request Email */
const resetEmailData = [{ name: 'email', value: 'email@email.email' }];

$.ajax({
  type: 'POST',
  url: `api.${url}/reset-password/email`, // URL must be preceded by "api."
  data: {
    email: resetEmailData,
  },
  success: function (response) {
    console.log(response.message); // Error or success message
  },
  error: function (err) {
    console.error('Password reset request failed:', err);
  },
});

/* Reset Password - Change Password */
const token = new URLSearchParams(window.location.search).get('token');
const newPasswordData = [
  { name: 'password', value: 'password' }, // Password must be at least 8 characters
  { name: 'password_confirmation', value: 'password' },
];

$.ajax({
  type: 'POST',
  url: `api.${url}/reset-password/`,
  data: {
    token: token,
    form_data: newPasswordData,
  },
  success: function (response) {
    console.log(response.message); // Error or success message
  },
  error: function (err) {
    console.error('Password change failed:', err);
  },
});
