const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", function () {
  //Obteniendo el numero random
  const randomNumber = Math.floor(Math.random() * colors.length);
  //Pintando el fondo
  body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
