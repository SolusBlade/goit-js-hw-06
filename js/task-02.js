const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = [];
const list = document.querySelector('#ingredients');
for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add('item');
  items.push(item);
}
list.append(...items);
// done