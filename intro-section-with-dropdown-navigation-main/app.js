let mobileNav = document.querySelector(".mobile-navigation-container");
let closeButton = document.querySelector(".close-menu");
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
  menuIcon.classList.remove("hidden");
});
