let mainImage = document.getElementById("mainImage");

let lightBox = document.getElementById("lightBox");
let lightImage = document.getElementById("lightImage");
let header = document.querySelector("header");
let exit = document.querySelector(".exit");
let productContainer = document.querySelector(".product-container");

let addToCart = document.getElementById("addCart");

mainImage.addEventListener("click", () => {
  lightBox.classList.toggle("hidden");

  header.classList.toggle("opacity-20");
  productContainer.classList.toggle("opacity-20");
});

exit.addEventListener("click", () => {
  lightBox.classList.toggle("hidden");
  header.classList.toggle("opacity-20");
  productContainer.classList.toggle("opacity-20");
});

document
  .querySelector(".fa-chevron-left")
  .addEventListener("click", function () {
    let imageCounter = 1;

    let currentImage = lightImage.src.split("-").pop().split(".")[0];
    imageCounter = parseInt(currentImage);

    let previousImage = imageCounter - 1;
    if (previousImage < 1) {
      previousImage = 4;
    }

    lightImage.src = `images/image-product-${previousImage}.jpg`;
  });

document
  .querySelector(".fa-chevron-right")
  .addEventListener("click", function () {
    let imageCounter = 1;

    let currentImage = lightImage.src.split("-").pop().split(".")[0];
    imageCounter = parseInt(currentImage);

    let nextImage = imageCounter + 1;
    if (nextImage > 4) {
      nextImage = 1;
    }

    lightImage.src = `images/image-product-${nextImage}.jpg`;
  });

let counterContainer = document.querySelector(".counter-container");

let counterNumber = 0;

counterContainer.addEventListener("click", (e) => {
  let counterNumberElement = document.querySelector(".counterNumber");

  if (e.target.classList.contains("fa-plus")) {
    counterNumber++; // Artırma işlemi
  } else if (e.target.classList.contains("fa-minus")) {
    if (counterNumber > 0) {
      counterNumber--;
    }
  }

  counterNumberElement.textContent = counterNumber;

  let shoppingCart = document.getElementById("shopping-cart");

  addToCart.addEventListener("click", () => {
    shoppingCart.innerText = counterNumber;
  });
});

let toggleBar = document.getElementById("toggle-bar");
let mobileMenu = document.getElementById("mobile-menu");
let quitButton = document.getElementById("quitButton");

toggleBar.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("quit")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

let product = document.querySelector(".product");
let shoppingBasket = document.querySelector(".shopping-basket");
let shoppingQuit = document.getElementById("shopping-quit");

shoppingBasket.addEventListener("click", () => {
  product.classList.toggle("hidden");

  shoppingQuit.addEventListener("click", () => {
    product.classList.add("hidden");
  });
});
