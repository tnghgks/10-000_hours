const modal = document.querySelector(".cont-modal");
const popUpBtn = document.querySelector("#practice_btn");
const popUpCloseBtn = document.querySelector("#popup-close");

let display = "none";

popUpBtn.addEventListener("click", popUpVisible);
popUpCloseBtn.addEventListener("click", popUpVisible);

function popUpVisible() {
  modal.classList.toggle("show");
}
