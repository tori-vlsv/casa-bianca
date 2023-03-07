import ScrollReveal from "scrollreveal";

export default function scrollInit() {
  const options = {
    distance: "20%",
    origin: "bottom",
    duration: 800,
    opacity: 0,
    delay: 500,
    mobile: false,
  };
  ScrollReveal().reveal(".reveal", options);
}
scrollInit();
