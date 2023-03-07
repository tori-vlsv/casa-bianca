import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';

export default function contactsSlider() {
  new Swiper('.contacts-slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });
}
contactsSlider();