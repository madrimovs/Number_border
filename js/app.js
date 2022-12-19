const elPurple = document.querySelector(".round__left"),
  elGold = document.querySelector(".round__right"),
  ellForm = document.querySelector(".form"),
  elInput = document.querySelector(".input");

ellForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const inNumber = Number(elInput.value);
  const lowNumber = 10;
  if (inNumber < lowNumber) {
    elPurple.style.border = "10px solid purple";
    elGold.style.border = "none";
  }
  if (inNumber >= lowNumber) {
    elGold.style.border = "10px solid gold";
    elPurple.style.border = "none";
  }
});
function refresh() {
  window.location.reload("Refresh");
}
