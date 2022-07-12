new Swiper(".swiper-testimonial", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,

  autoplay: {
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

new Swiper(".swiper-client", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    425: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },

    576: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 6,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
  },
});
