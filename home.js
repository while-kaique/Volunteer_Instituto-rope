/** @format */

jQuery(document).ready(function () {
  var webdoorScene = jQuery(".parallax-scene").get(0);
  var parallaxInstance = new Parallax(webdoorScene, { hoverOnly: true });
  var volunteerSlider = new Swiper(".home-volunteers-slider", {
    pagination: { clickable: true, el: ".swiper-pagination" },
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      476: { slidesPerGroup: 1, slidesPerView: 1 },
      768: { slidesPerGroup: 2, slidesPerView: 2 },
      992: { slidesPerGroup: 3, slidesPerView: 3 },
    },
  });
});
