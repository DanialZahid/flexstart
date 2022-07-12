// Accordion

// Store reference for all accordions.

const accordion = document.querySelectorAll(".accordion-title");

// Open accordion when clicked on it.

accordion.forEach((e) => {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  e.target.classList.toggle("accordion-active");

  // Prevent opening multiple accordions at the same time.

  accordion.forEach((e) => {
    if (this !== e) {
      e.classList.remove("accordion-active");
    }
  });
}

// Tabs

const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

for (let i = 0; i < tab.length; i++) {
  tab[i].onclick = tabActive;
}

function tabActive() {
  for (let i = 0; i < tab.length; i++) {
    this.classList.add("tab-active");

    if (tab[i] !== this) {
      tab[i].classList.remove("tab-active");
    }
  }

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.add("tab-content-active");

    if (tab[i] !== this) {
      tabContent[i].classList.remove("tab-content-active");
    }
  }
}

// Fixed header

const header = document.querySelector("header");

document.addEventListener("scroll", setFixedHeader);

function setFixedHeader() {
  if (window.scrollY >= 50) {
    header.classList.add("header-fixed");
  } else {
    header.removeAttribute("class");
  }
}

// Back to top

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

// Portfolio filter

let sortBtn = document.querySelector(".filter-menu").children;
let sortItem = document.querySelector(".filter-item").children;

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }

    this.classList.add("current");

    let targetData = this.getAttribute("data-target");

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove("active");
      sortItem[k].classList.add("delete");

      if (
        sortItem[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        sortItem[k].classList.remove("delete");
        sortItem[k].classList.add("active");
      }
    }
  });
}
