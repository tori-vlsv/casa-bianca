import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default function productFilter() {
  function toggleFilter() {
    $('.filter__header').on('click', function() {
      $(this).next().slideToggle();
      $(this).find('img').toggleClass('active');
    });
  }
  toggleFilter();

  function toggleButtonFilter() {
    let scrollableElement = document.querySelector('.filter__wrapper');
    let filter = $('.filter');
    $('.collection__button').on('click', function() {
      filter.addClass('open');
      disablePageScroll(scrollableElement);
    });
    $('.filter__close').on('click', function(){
      filter.removeClass('open');
      enablePageScroll();
    });

    let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  toggleButtonFilter();
}
productFilter();