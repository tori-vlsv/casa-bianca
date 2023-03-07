import Swiper, { Navigation } from 'swiper';

export default function postSlider() {
  new Swiper('.post-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: '.post__slider .swiper-button-next',
      prevEl: '.post__slider .swiper-button-prev',
    }
  });
}
postSlider();