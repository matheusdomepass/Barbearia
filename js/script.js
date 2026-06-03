const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(7, 7, 8, 0.96)";
  } else {
    header.style.background = "rgba(11, 11, 13, 0.82)";
  }
});