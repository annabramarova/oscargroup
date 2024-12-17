import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import axios from 'axios';
import MicroModal from 'micromodal';
// import { modalConfig } from '../../js/micromodal';

const contactForm = document.querySelector('.js-contact-form');

contactForm.addEventListener('bouncerFormValid', function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  formData.append('formId', 'ContactForm');
  sendData(formData);
});

async function sendData(formData) {
  // Loading.standard({
  //   svgColor: '#863fff',
  // });

  try {
    console.log('Form Data:', formData);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // MicroModal.show('modal-2', modalConfig);

    // contactForm.reset();

    // Loading.remove();
  } catch (error) {
    console.error('Error:', error);

    // Loading.remove();

    Notify.failure('An error occurred, please try again.', {
      timeout: 3000,
      showOnlyTheLastOne: true,
    });
  }
}
