"use strict";

// Swiper section Category
const swiper = new Swiper(".slider-reviews", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 530px
    590: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 1280px
    1200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
