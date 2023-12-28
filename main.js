// const body = document.querySelector("body");

// const colorCode = document.querySelector(".colorCode");
// const gBtn = document.querySelector(".gBtn");
// const copyBtn = document.querySelector(".copyBtn");

// gBtn.addEventListener("click", generateBtn);

// function generateBtn() {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.ceil(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   let generateColor = `rgb(${red} , ${green} , ${blue})`;
//   body.style.background = generateColor;
//   colorCode.style.color = generateColor;
//   show(generateColor);
//   // colorCode.value = generateColor;
// }

// function show(code) {
//   colorCode.value = code;
// }

// copyBtn.addEventListener("click", copyColor);

// function copyColor() {
//   navigator.clipboard.writeText(colorCode.value);
//   copyBtn.innerHTML = "copied";
//   copyBtn.style.background = "#FF9800";
//   copyBtn.style.color = "#304D30";
// }

const body = document.querySelector("body");
const output = document.querySelector(".colorCode");
const genBtn = document.querySelector(".gBtn");
const copyBtn = document.querySelector(".copyBtn");

const codeLen = 6;

genBtn.addEventListener("click", function () {
  const hash = "#";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "1234567890";
  let color = hash + lowerCase + number;

  while (color.length <= codeLen) {
    color += color[Math.floor(Math.random() * color.length)];
  }

  console.log(color);
});
