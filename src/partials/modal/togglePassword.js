const passwordField = document.getElementById('password-login');
const togglePasswordButton = document.querySelector('.toggle-password');
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
