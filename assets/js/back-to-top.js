const scrollToTopBtn = document.querySelector(".scroll-top");

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", showScrollToTopBtn);

function scrollToTop() {
  window.scrollTo(0, 0);
}

function showScrollToTopBtn() {
  if (window.scrollY >= 500) {
    scrollToTopBtn.classList.add("show-scroll-to-top-btn");
  } else {
    scrollToTopBtn.classList.remove("show-scroll-to-top-btn");
  }
}
