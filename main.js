const body = document.querySelector("body");

const colorCode = document.querySelector(".colorCode");
const gBtn = document.querySelector(".gBtn");
const copyBtn = document.querySelector(".copyBtn");

gBtn.addEventListener("click", generateBtn);

function generateBtn() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  let generateColor = `rgb(${red} , ${green} , ${blue})`;
  body.style.background = generateColor;
  colorCode.style.color = generateColor;
  show(generateColor);
}

function show(code) {
  colorCode.value = code;
}

copyBtn.addEventListener("click", copyColor);

function copyColor() {
  navigator.clipboard.writeText(colorCode.value);
  copyBtn.innerHTML = "copied";
  copyBtn.style.background = "#FF9800";
  copyBtn.style.color = "#304D30";
}
