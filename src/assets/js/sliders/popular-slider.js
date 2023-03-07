import Swiper, { Navigation } from 'swiper';

export default function popularSlider() {
  new Swiper('.popular-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 4,
      }
    },
    navigation: {
      nextEl: '.popular__slider .swiper-button-next',
      prevEl: '.popular__slider .swiper-button-prev',
    }
  });
}
popularSlider();