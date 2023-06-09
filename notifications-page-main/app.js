let markAsRead = document.getElementById("readed");
let deleteAll = document.getElementById("deleteAll");
let notificationNumber = document.getElementById("notificationNumber");
let notifications = document.querySelectorAll(".notifications");
let orangeBar = document.querySelectorAll(".notifications .orangeBar ");

markAsRead.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.remove("bg-gray-100");
    notificationNumber.innerText = "0";
  });
});

markAsRead.addEventListener("click", () => {
  orangeBar.forEach((bar) => {
    bar.classList.add("hidden");
  });
});

deleteAll.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.add("hidden");
    notificationNumber.innerText = "0";
  });
});
