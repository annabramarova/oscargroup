import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import axios from 'axios';
import MicroModal from 'micromodal';
// import { modalConfig } from '../../js/micromodal';

// Проверяем, есть ли форма на странице
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.js-contact-form');

  if (!contactForm) return; // Если формы нет, прекращаем выполнение скрипта

  contactForm.addEventListener('bouncerFormValid', async event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    formData.append('formId', 'ContactForm');

    await sendData(formData, contactForm); // Передаем форму для сброса
  });
});

async function sendData(formData, contactForm) {
  try {
    console.log('Form Data:', formData);

    // Логируем все данные формы
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Отображаем сообщение об успешной отправке
    Notify.success('Form is sent successfully', {
      timeout: 3000,
      showOnlyTheLastOne: true,
    });

    // Показываем модальное окно (если нужно)
    // MicroModal.show('modal-2', modalConfig);

    // Сбрасываем форму после успешной отправки
    contactForm.reset();

    // Loading.remove(); // Убираем индикатор загрузки, если используется
  } catch (error) {
    console.error('Error:', error);

    // Notify о неудачной отправке
    Notify.failure('An error occurred, please try again.', {
      timeout: 3000,
      showOnlyTheLastOne: true,
    });

    // Loading.remove(); // Убираем индикатор загрузки в случае ошибки
  }
}
