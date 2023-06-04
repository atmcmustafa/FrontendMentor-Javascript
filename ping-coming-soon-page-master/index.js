let input = document.getElementById("input");
let button = document.getElementById("button");
let errorMsg = document.querySelector(".error-msg");

button.addEventListener("click", () => {
  if (input.value <= 0) {
    errorMsg.classList.remove("hidden");
    input.classList.add("border-red-600");
  } else {
    errorMsg.classList.add("hidden");
    input.classList.remove("border-red-600");
  }
});
