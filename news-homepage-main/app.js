let mobileBar = document.getElementById("mobileIcon");
let closeIcon = document.getElementById("closeButton");
let mobileMenu = document.querySelector(".mobile-menu");
let body = document.querySelector("body");
let header = document.querySelector("header");

mobileBar.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  body.classList.toggle("px-8");
  header.classList.toggle("px-8");

  closeIcon.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    body.classList.add("px-8");
    header.classList.remove("px-8");
  });
});
