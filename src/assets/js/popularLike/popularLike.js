export default function popularLike() {
  $('.fixed-like').on('click', function() {
    $(this).toggleClass('active');
  });
}
popularLike();