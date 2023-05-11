
// inputs
let dayInput = document.getElementById("day-input");
let monthInput = document.getElementById("month-input");
let yearInput = document.getElementById("year-input");

// date

let date = new Date();

let d = date.getDate();
let m = date.getMonth() + 1;
let y = date.getFullYear();

console.log(d,m,y);

// button
let calculate = document.getElementById("calculate");

// spans
let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");

let invalidYears = document.getElementById("invalid-year");
let invalidMonths = document.getElementById("invalid-month");
let invalidDays = document.getElementById("invalid-day");



calculate.addEventListener("click",()=>{

    // day calculate
    if(dayInput.value < 31 && dayInput.value > 0){
        if(dayInput.value < d){
            days.innerText= d - dayInput.value;
            invalidDays.classList.add("hidden");
        }
        else {
            days.innerText= dayInput.value - d;
            invalidDays.classList.add("hidden");
        }  
    }
    else {
        invalidDays.classList.remove("hidden");
    }

        // month calculate
        if(monthInput.value < 13 && monthInput.value > 0){
            if(monthInput.value < m){
                months.innerText= m - monthInput.value;
                invalidMonths.classList.add("hidden");
            }
            else {
                months.innerText=monthInput.value - m ;
                invalidMonths.classList.add("hidden");
            }
        }
        else {
            invalidMonths.classList.remove("hidden");
        }


                // year calculate
                if(yearInput.value <= y && yearInput.value > 0){
                    if(yearInput.value < y){
                        years.innerText= y - yearInput.value;
                        invalidYears.classList.add("hidden");
                    }
                    else {
                        invalidYears.classList.add("hidden");
                    }
                }
                else {
                    invalidYears.classList.remove("hidden");
                }
    

    dayInput.value="";
    monthInput.value="";
    yearInput.value="";



})







