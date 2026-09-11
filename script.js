const startButton = document.querySelector("#start-button");
const shiftStatus = document.querySelector("#shift-status");

startButton.addEventListener("click", function () {
  shiftStatus.textContent = "You've started your shift! Let's take this one step at a time.";
  startButton.textContent = "View My First Task";
});
