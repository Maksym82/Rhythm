"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  console.log(targetItem);
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  } else if (targetItem.closest(".menu__link")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

// Swiper section Store
const swiper = new Swiper(".slider-store", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    // when window width is >= 530px
    590: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1280px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  }
});


