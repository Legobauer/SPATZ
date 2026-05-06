// JavaScript Template
// Warten bis die Seite fertig geladen ist
document.addEventListener("DOMContentLoaded", function () {
  // Header Scrollanimation
  let lastScrollTop = 0;
  const header = document.querySelector("header.nav");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset;

    if (scrollTop > lastScrollTop) {
      header.style.top = `-${header.offsetHeight}px`;
    } else {
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });

  // Add your custom JavaScript here
});
