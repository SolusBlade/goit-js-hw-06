function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const list = document.querySelector("#boxes");


function createBoxes(amount){
  const markup = [];
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const hex = getRandomHexColor();
    markup.push(`<div style = "width:${size}px; height:${size}px; background-color: ${hex};"></div>`);
    size += 10;
  }
  list.innerHTML = [...markup].join('');
}


createBtnRef.addEventListener('click', () => {
  let inputValue;
  inputValue = input.value;
  createBoxes(inputValue);
});
destroyBtnRef.addEventListener('click', () => {
  list.innerHTML = '';
});

