let cardContainer = document.querySelector(".card-container");
let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

async function getJsonData(timeframe) {
  let response = await fetch("data.json");
  let data = await response.json();
  console.log(data);
  data.forEach((item) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="max-w-[300px] flex flex-col w-96 rounded-xl relative overflow-hidden h-[12rem] md:h-[16rem]">
        <div class="rounded-xl p-4 w-full bg-${item.color} flex justify-end absolute top-0 bottom-1">
            <img src="${item.icon}" class="w-16 right-10 -top-2 absolute " />
        </div>
        <div style="background: hsl(226, 43%, 10%)" class=" p-6 absolute top-12 w-full h-full rounded-xl">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl ">${item.title}</h1>
                <i class="fa-solid fa-ellipsis "></i>
            </div>
            <div class="flex justify-between md:block items-center">
            <span class="text-3xl md:text-5xl block my-3">${item.timeframes[timeframe].current}hrs</span>
            <p class="text-gray-400">Last ${timeframe} - ${item.timeframes[timeframe].previous}hrs</p>        
          </div>
        </div>
    </div>
  `;
    cardContainer.appendChild(card);
  });
}

getJsonData("daily");

daily.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  setActiveButton(daily);
  getJsonData("daily");
});

weekly.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  setActiveButton(weekly);
  getJsonData("weekly");
});

monthly.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  setActiveButton(monthly);
  getJsonData("monthly");
});

function setActiveButton(button) {
  const buttons = [daily, weekly, monthly];

  buttons.forEach((btn) => {
    if (btn === button) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}
