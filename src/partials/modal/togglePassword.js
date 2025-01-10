function togglePasswordVisibility(passwordFieldId, toggleButtonSelector) {
  const passwordField = document.getElementById(passwordFieldId);
  const togglePasswordButton = document.querySelector(toggleButtonSelector);
  const eyeIcon = togglePasswordButton.querySelector('i');

  togglePasswordButton.addEventListener('click', function () {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    if (type === 'password') {
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  });
}

togglePasswordVisibility('password-login', '.toggle-password-login');
togglePasswordVisibility('password-register', '.toggle-password-register');
togglePasswordVisibility('confirm-register', '.toggle-password-confirm');