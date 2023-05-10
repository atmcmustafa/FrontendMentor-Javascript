let mainCard = document.querySelector(".main-card");
let rateCard = document.querySelector(".rate-card");

let rateValue = document.getElementById("rate");
let userFeedback = document.querySelectorAll(".user-feedback span")
let submitbtn = document.getElementById("submit-btn");
let rateBtn = document.getElementById("rate-btn");


submitbtn.addEventListener("click", () =>{
    rateCard.classList.remove("hidden")
    mainCard.classList.add("hidden")
    
})

rateBtn.addEventListener("click", () =>{
    rateCard.classList.add("hidden")
    mainCard.classList.remove("hidden")
    
})

userFeedback.forEach((rate)=>{ 
    rate.addEventListener("click",()=>{
        rateValue.innerHTML = rate.innerHTML
    })
})










