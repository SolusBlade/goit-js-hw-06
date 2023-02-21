function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.body;
const spanRef = document.querySelector(".color");
const btnRef = document.querySelector(".change-color");

function changeBgColor(){
  const hex = getRandomHexColor();
  spanRef.textContent = hex;
  bodyRef.style.backgroundColor = hex;

}

btnRef.addEventListener('click', changeBgColor);