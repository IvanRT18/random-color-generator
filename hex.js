const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const span = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", function () {
  body.style.backgroundColor = getRandomColor();
  span.textContent = getRandomColor();
});

function getRandomCaracter() {
  const randomNumber = Math.floor(Math.random() * hex.length);
  return hex[randomNumber];
}

function getRandomColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomCaracter();
  }
  return hexColor;
}
