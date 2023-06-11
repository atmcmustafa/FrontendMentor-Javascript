let bill = document.getElementById("bill");
let btn5 = document.getElementById("btn-5");
let btn10 = document.getElementById("btn-10");
let btn15 = document.getElementById("btn-15");
let btn25 = document.getElementById("btn-25");
let btn50 = document.getElementById("btn-50");
let customInput = document.getElementById("customInput");
let peopleNumber = document.getElementById("peopleNumber");
let tipAmountValue = document.getElementById("tipAmountValue");
let totalAmountValue = document.getElementById("totalAmountValue");
let resetButton = document.getElementById("resetButton");
let errorMsg = document.getElementById("errorMsg");

function checkEmptyInput() {
  if (peopleNumber.value <= 0) {
    errorMsg.classList.remove("hidden");
    peopleNumber.classList.add("border-red-600");
  } else {
    errorMsg.classList.add("hidden");
    peopleNumber.classList.remove("border-red-600");
  }
}

function calculateTip() {
  customInput.addEventListener("input", () => {
    let tipAmount =
      (Math.round(bill.value * customInput.value) / 100) * peopleNumber.value;

    checkEmptyInput();
    tipAmountValue.innerHTML = `$${tipAmount.toFixed(2)}`;
    let totalAmount =
      Math.round(bill.value * peopleNumber.value) / peopleNumber.value;
    totalAmountValue.innerHTML =
      `$${(totalAmount + tipAmount).toFixed(2)}` || "$0.00";
  });

  btn5.addEventListener("click", () => {
    let tipAmount = (Math.round(bill.value * 5) / 100) * peopleNumber.value;

    tipAmountValue.innerHTML = `$${tipAmount.toFixed(2)}`;
    checkEmptyInput();

    let totalAmount =
      Math.round(bill.value * peopleNumber.value) / peopleNumber.value;
    totalAmountValue.innerHTML =
      `$${(totalAmount + tipAmount).toFixed(2)}` || 0;
  });

  btn10.addEventListener("click", () => {
    let tipAmount = (Math.round(bill.value * 10) / 100) * peopleNumber.value;

    tipAmountValue.innerHTML = `$${tipAmount.toFixed(2)}`;
    checkEmptyInput();
    let totalAmount =
      Math.round(bill.value * peopleNumber.value) / peopleNumber.value;
    totalAmountValue.innerHTML = `$${(totalAmount + tipAmount).toFixed(2)}`;
  });

  btn15.addEventListener("click", () => {
    let tipAmount = (Math.round(bill.value * 15) / 100) * peopleNumber.value;
    checkEmptyInput();
    tipAmountValue.innerHTML = `$${tipAmount.toFixed(2)}`;
    let totalAmount =
      Math.round(bill.value * peopleNumber.value) / peopleNumber.value;
    totalAmountValue.innerHTML = `$${(totalAmount + tipAmount).toFixed(2)}`;
  });

  btn25.addEventListener("click", () => {
    let tipAmount = (Math.round(bill.value * 25) / 100) * peopleNumber.value;
    checkEmptyInput();
    tipAmountValue.innerHTML = `$${tipAmount.toFixed(2)}`;

    let totalAmount =
      Math.round(bill.value * peopleNumber.value) / peopleNumber.value;
    totalAmountValue.innerHTML = `$${(totalAmount + tipAmount).toFixed(2)}`;
  });

  btn50.addEventListener("click", () => {
    let tipAmount = (Math.round(bill.value * 50) / 100) * peopleNumber.value;
    checkEmptyInput();
    tipAmountValue.innerHTML = `$${tipAmount.toFixed(2)}`;

    let totalAmount =
      Math.round(bill.value * peopleNumber.value) / peopleNumber.value;
    totalAmountValue.innerHTML = `$${(totalAmount + tipAmount).toFixed(2)}`;
  });

  resetButton.addEventListener("click", () => {
    bill.value = "";
    peopleNumber.value = "";
    tipAmountValue.innerHTML = "$0.00";
    totalAmountValue.innerHTML = "$0.00";
  });
}

calculateTip();
