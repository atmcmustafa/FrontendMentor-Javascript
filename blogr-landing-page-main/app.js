const hamburger = document.getElementById("hamburger");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  if (mobileNav.classList.contains("hidden")) {
    hamburger.innerHTML = `<img id="hamburger" src="images/icon-hamburger.svg" alt="menu" />`;
  } else {
    hamburger.innerHTML = `<img id="hamburger" src="images/icon-close.svg" alt="menu" />`;
  }
});
