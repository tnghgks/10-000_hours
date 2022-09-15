const modal = document.querySelector(".cont-modal");
const popUpBtn = document.querySelector("#practice_btn");
const popUpCloseBtn = document.querySelector("#popup-close");
const form = document.querySelector("#form-wannabe");
const resultWrapper = document.querySelector("#result-wrapper");
const resultSection = document.querySelector("#result");
const loadingImg = document.querySelector("#loading_img");

let display = "none";

function popUpVisible() {
  modal.classList.toggle("modal");
}

function handleSubmit(e) {
  e.preventDefault();
  resultSection.classList.remove("show");
  loadingImg.classList.add("show");
  setTimeout(timeDivison, 1800);
}

function timeDivison() {
  loadingImg.classList.remove("show");
  const wannabe = document.querySelector("#wannabe");
  const time = document.querySelector("#time");
  const resultWannabe = document.querySelector("#result-wannabe");
  const resultTime = document.querySelector("#result-time");

  if (isNaN(time.value / 1)) {
    alert("시간에는 숫자만 입력해주세요.");
    return;
  }

  resultWannabe.innerHTML = wannabe.value;
  resultTime.innerHTML = Math.floor(10000 / parseInt(time.value, 10));
  resultSection.classList.add("show");
}

popUpBtn.addEventListener("click", popUpVisible);
popUpCloseBtn.addEventListener("click", popUpVisible);
form.addEventListener("submit", handleSubmit);
