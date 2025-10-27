// script.js
// Simple smooth fade-in animation for your page content (matches your dark theme perfectly)

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("h1, h2, p, img");

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 300 * index);
  });
});

