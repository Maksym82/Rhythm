// ===== Mobile menu =====
document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;
  console.log(targetItem);
  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  } else if (targetItem.closest('.menu__link')) {
    document.documentElement.classList.toggle('menu-open');
  }
}

//===== Слайдер section Category =====
const swiper = new Swiper('.slider-category', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 590px
    590: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

// ===== Слайдер section Reviews =====
const swiperReviews = new Swiper('.slider-reviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 590px
    590: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// ===== Слайдер section Store =====
const swiperStore = new Swiper('.slider-store', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 590px
    590: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

// ===== Scroll to Top =====
const scrollToTopButton = document.getElementById('scrollToTop');

scrollToTopButton.addEventListener('click', () => {
  anime({
    targets: document.documentElement,
    scrollTop: 0,
    duration: 100,
    easing: 'easeOutQuad',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});
