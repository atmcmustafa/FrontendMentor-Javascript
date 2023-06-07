let signUp = document.getElementById("sign-up");
let correctForm = document.getElementById("correctForm");
let button = document.getElementById("button");
let dismissButton = document.getElementById("dismissButton");
let input = document.getElementById("input");
let errorMsg = document.querySelector(".error-msg ");

button.addEventListener("click", () => {
  signUp.classList.add("hidden");
  correctForm.classList.remove("hidden");

  if (input.value <= 0) {
    errorMsg.classList.remove("hidden");
    input.classList.add("border-red-600");
    correctForm.classList.add("hidden");
    signUp.classList.remove("hidden");
  } else {
    input.classList.remove("border-red-600");
    correctForm.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }
});

dismissButton.addEventListener("click", () => {
  signUp.classList.remove("hidden");
  correctForm.classList.add("hidden");
});
