const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});
