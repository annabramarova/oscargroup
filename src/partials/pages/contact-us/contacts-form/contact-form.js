import { Notify } from 'notiflix/build/notiflix-notify-aio';
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.js-contacts-page-form');

  if (!contactForm) return;

  contactForm.addEventListener('bouncerFormValid', async event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    formData.append('formId', 'ContactForm');

    await sendData(formData, contactForm);
  });
});

async function sendData(formData, contactForm) {
  try {
    console.log('Form Data:', formData);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    Notify.success('Form is sent successfully', {
      timeout: 3000,
      showOnlyTheLastOne: true,
    });

    contactForm.reset();
  } catch (error) {
    console.error('Error:', error);

    Notify.failure('An error occurred, please try again.', {
      timeout: 3000,
      showOnlyTheLastOne: true,
    });
  }
}
