import $ from "jquery";
import barba from "@barba/core";
import barbaPrefetch from "@barba/core";
import gsap from "gsap";
import isCurrentPage from "js/linksChecker/isCurrentPage/isCurrentPage";
import fixedHeader from "js/scroll/fixedHeader/fixedHeader";
import scrollReveal from "js/scroll/scrollReveal/scrollReveal";
import popularSlider from "js/sliders/popular-slider";
import preloader from "js/preloader/preloader";
import contactsSlider from "js/sliders/contacts-slider";
import popularHover from "js/popularHover/popularHover";
import video from "js/video/video";
import popularLike from "js/popularLike/popularLike";
import productSlider from "js/sliders/product-slider";
import productFilter from "js/filter/filter";

barba.use(barbaPrefetch);

function checkHeader(nextPath) {
  let header = $('header');
  if (nextPath == undefined) {
    nextPath = window.location.pathname;
  }
  if (
    nextPath == '/about' || 
    nextPath == '/about/' || 
    nextPath == '/contacts' || 
    nextPath == '/contacts/' || 
    nextPath == '/'
  ) {
    header.removeClass('header-white');
  } else {
    header.addClass('header-white');
  }
}
checkHeader();

// If the header is in barba-wrapper, then the script below is not needed.
barba.hooks.before((data) => {
  const nextPath = data.next.url.path;
  checkHeader(nextPath);
});

barba.hooks.after((data) => {
  const nextPath = data.next.url.path;
  checkHeader(nextPath);
});

barba.hooks.beforeLeave((data) => {
  const nextPath = data.next.url.path;
  const nextItem = $(`a[href="${nextPath}"]`);
  $(`.${"active"}`).removeClass("active");
  nextItem.addClass("active");
});

barba.init({
  preventRunning: true,
  requestError: (trigger, action, url, response) => {
    if (action === "click" && response.status && response.status === 404) {
      barba.go("/404");
    }
    return false;
  },
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, .3, {
          opacity: 0,
        });
      },
      afterLeave(data) {
        $('body,html').animate({scrollTop: 0}, 200);
        return gsap.to(data.current.container, 0, {
          display: 'none',
        });
      },
      enter(data) {
        gsap.to($('.hero__bg'), 0, {transform: 'scale(100%)'})
        preloader();
        scrollReveal();
        isCurrentPage();
        fixedHeader();
        popularSlider();
        popularHover();
        contactsSlider();
        video();
        popularLike();
        productSlider();
        productFilter();
        return gsap.from(data.next.container, .3, {
          opacity: 0
        });
      },
    },
  ],
});
