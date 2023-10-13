/** @format */

var winHash = window.location.hash;
if (winHash) scroll(0, 0);
setTimeout(function () {
  scroll(0, 0);
}, 1);
function doAnimatedScroll(tg, tgOf, of, scTr) {
  jQuery("html, body").animate({ scrollTop: tgOf - of }, scTr);
  tg.focus();
  if (tg.is(":focus")) {
    return false;
  } else {
    tg.attr("tabindex", "-1");
    tg.focus();
  }
}
jQuery(document).ready(function () {
  var win = jQuery(window);
  var winHeight = win.innerHeight();
  var navbar = jQuery(".header-navbar");
  var navbarHeight = navbar.outerHeight();
  win.on("scroll", function () {
    if (win.scrollTop() > winHeight - navbarHeight) {
      navbar.addClass("menu-fixed");
      navbar
        .parent()
        .children(".header-brand-bar")
        .css("margin-bottom", navbarHeight);
    } else {
      navbar.removeClass("menu-fixed");
      navbar
        .parent()
        .children(".header-brand-bar")
        .css("margin-bottom", "auto");
    }
  });
  var scrollTrigger = jQuery(".scroll-link");
  var scrollTransition = 1000;
  scrollTrigger.on("click", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = jQuery(this.hash);
      var targetOffset = target.offset() ? target.offset().top : 0;
      target = target.length
        ? target
        : jQuery('[name="' + this.hash.slice(1) + '"]');
      if (target.length) {
        e.preventDefault();
        doAnimatedScroll(target, targetOffset, navbarHeight, scrollTransition);
        return false;
      }
    }
  });
  if (winHash) {
    var target = jQuery(winHash);
    var targetOffset = target.offset() ? target.offset().top : 0;
    setTimeout(function () {
      doAnimatedScroll(target, targetOffset, navbarHeight, scrollTransition);
    }, scrollTransition * 0.5);
  }
  var footerPartnerSlider = new Swiper(".footer-partners-slider", {
    autoplay: { delay: 3000 },
    grabCursor: true,
    loop: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
      el: ".swiper-pagination",
    },
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      576: { slidesPerGroup: 2, slidesPerView: 2 },
      768: { slidesPerGroup: 3, slidesPerView: 3 },
      992: { slidesPerGroup: 4, slidesPerView: 4 },
    },
  });
  var partnerSlider = new Swiper(".inner-partners-slider", {
    pagination: { clickable: true, el: ".swiper-pagination" },
    slidesPerColumn: 3,
    slidesPerGroup: 5,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      576: { slidesPerColumn: 5, slidesPerGroup: 2, slidesPerView: 2 },
      768: { slidesPerGroup: 3, slidesPerView: 3 },
      992: { slidesPerGroup: 4, slidesPerView: 4 },
    },
  });
  var volunteerSlider = new Swiper(".inner-volunteers-slider", {
    pagination: { clickable: true, el: ".swiper-pagination" },
    slidesPerColumn: 2,
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      476: { slidesPerColumn: 4, slidesPerGroup: 1, slidesPerView: 1 },
      768: { slidesPerGroup: 2, slidesPerView: 2 },
      992: { slidesPerGroup: 3, slidesPerView: 3 },
    },
  });
  var testimonialSlider = new Swiper(".testimonial-slider", {
    autoplay: { delay: 3000 },
    loop: true,
    pagination: { clickable: true, el: ".swiper-pagination" },
    slidesPerGroup: 1,
    slidesPerView: 1,
  });
  jQuery(".entry-gallery").lightGallery({
    download: false,
    selector: ".photo-link",
  });
  var swiper = new Swiper(".partner-photos-slider", {
    autoplay: { delay: 3000 },
    loop: true,
    pagination: { clickable: true, el: ".swiper-pagination" },
  });
});
