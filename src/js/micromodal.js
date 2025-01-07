import MicroModal from 'micromodal';

export const modalConfig = {
  onShow: modal => {
    const scroll = document.body.scrollWidth;
    document.body.classList.toggle('menu-open');
    const noScroll = document.body.scrollWidth;

    document.body.style.paddingRight = `${noScroll - scroll}px`;
  },
  onClose: modal => {
    setTimeout(() => {
      document.body.classList.toggle('menu-open');
      document.body.style.paddingRight = '0px';
    }, 250);
  },
  awaitCloseAnimation: true,
};

MicroModal.init(modalConfig);
