import Swiper, { Navigation, Thumbs } from 'swiper';

export default function productSlider() {
  let swiper = new Swiper('.product__img-slides', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });
  new Swiper('.product__img-slider', {
    modules: [Navigation, Thumbs],
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: '.product__slider .swiper-button-next',
      prevEl: '.product__slider .swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });
}
productSlider();
