import gsap from "gsap";

export default function renderPage() {
  const render = $(".render");
  gsap
    .fromTo(
      render,
      0.5,
      { opacity: "1", zIndex: "99999" },
      { opacity: "0", zIndex: "-1" }
    )
    .delay(0.4)
    .then(gsap.to($('.hero__bg'), 2, {transform: 'scale(110%)'}));
}
renderPage();
