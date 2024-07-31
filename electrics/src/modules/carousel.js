import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const carousel = () => {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

}

export default carousel;