import gsap from 'gsap';

export default function popularHover() {
  $('.popular__item').on('mouseover', function() {
    gsap.to($(this).children('.popular__item__content'), .3, {height: '100%'});
  });

  $('.popular__item').on('mouseleave', function() {
    gsap.to($(this).children('.popular__item__content'), .3, {height: 'auto'});
  });
}
popularHover();