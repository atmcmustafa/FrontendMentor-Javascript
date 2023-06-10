let dayOfDollar = document.querySelectorAll(".showDollar");

async function fetchData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, i) => {
        dayOfDollar[i].innerText = `$${item.amount}`;
      });
    });
}
fetchData();
