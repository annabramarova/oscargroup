import { Notify } from 'notiflix/build/notiflix-notify-aio';
const loader = document.getElementById('loader');

function showLoader() {
  loader.style.display = 'flex'; 
}

function hideLoader() {
  loader.style.display = 'none'; 
}

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.js-contact-form');

  if (!contactForm) return; 

  contactForm.addEventListener('bouncerFormValid', async event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    formData.append('formId', 'ContactForm');

    showLoader(); 

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
  } finally {
    hideLoader(); 
  }
}
