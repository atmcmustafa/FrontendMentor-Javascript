let question = document.querySelectorAll(".question");
let openBtn = document.querySelectorAll(".arrow-btn");
let header = document.querySelectorAll(".header");

openBtn.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        question[i].classList.toggle("hidden")
        header[i].classList.toggle("font-bold")
    })
});




