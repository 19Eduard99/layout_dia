import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  const setupMenuToggle = (
    menuToggleSelector,
    menuLinkSelector,
    lockScrollClass,
  ) => {
    const menuToggle = document.querySelectorAll(menuToggleSelector);
    const menuLinks = document.querySelectorAll(menuLinkSelector);

    if (location.hash === '#menu') {
      document.body.classList.add(lockScrollClass);
    }

    const lockScroll = () => {
      document.body.classList.remove(lockScrollClass);
    };

    const toggleScroll = () => {
      document.body.classList.toggle(lockScrollClass);
    };

    menuToggle.forEach((el) => {
      el.addEventListener('click', toggleScroll);
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', lockScroll);
    });
  };
  setupMenuToggle(
    '.menu-toggle',
    '.link',
    'lock-scroll'
  );
})();
