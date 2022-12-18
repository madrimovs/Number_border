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
  }
  if (inNumber >= lowNumber) {
    elGold.style.border = "10px solid gold";
  }
});
function refresh() {
  window.location.reload("Refresh");
}
