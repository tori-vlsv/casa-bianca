export default function video() {
  let button = $('.video__play');
  let poster = $('.video__poster');
  button.on('click', function() {
    $(this).fadeOut();
    poster.fadeOut();
  });
  button.on('click', function() {
    $(this).fadeOut();
    button.fadeOut();
  });
}
video();