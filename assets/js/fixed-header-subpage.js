const header = document.querySelector("header");

document.addEventListener("scroll", setFixedHeader);

function setFixedHeader() {
  if (window.scrollY >= 50) {
    header.classList.add("header-fixed");
    header.classList.remove("header-static");
  } else {
    header.classList.remove("header-fixed");
    header.classList.add("header-static");
  }
}
