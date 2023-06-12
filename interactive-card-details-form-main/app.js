let nameInput = document.getElementById("name");
let cardNumber = document.getElementById("cardNumber");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvv = document.getElementById("cvv");
let confirmButton = document.getElementById("confirmButton");
let input = document.querySelectorAll("input");

// span ands paragraphs
let nameInfo = document.getElementById("nameInfo");
let cardNumberInfo = document.getElementById("cardNumberInfo");
let monthInfo = document.getElementById("monthInfo");
let yearInfo = document.getElementById("yearInfo");
let cvvInfo = document.getElementById("cvvInfo");

nameInput.addEventListener("input", () => {
  nameInfo.innerText = nameInput.value;
});

cardNumber.addEventListener("input", function () {
  var formattedValue = formatCardNumber(cardNumber.value);
  cardNumberInfo.innerText = formattedValue;
});

function formatCardNumber(value) {
  var formatted = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ");
  return formatted.trim();
}

month.addEventListener("input", () => {
  monthInfo.innerText = month.value + "/";
});

year.addEventListener("input", () => {
  yearInfo.innerText = year.value;
});

cvv.addEventListener("input", () => {
  cvvInfo.innerText = cvv.value;
});

let cardContainer = document.querySelector(".card-container");
let completedContainer = document.querySelector(".complete-container");

confirmButton.addEventListener("click", () => {
  cardContainer.classList.add("hidden");
  completedContainer.classList.remove("hidden");
});
