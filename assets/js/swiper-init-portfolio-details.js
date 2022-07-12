new Swiper(".swiper", {
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
    840: {
      spaceBetween: 50,
    },
  },
});
