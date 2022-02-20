const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingr;
for (const ingredient of ingredients) {
  const ingr = document.createElement("li");
  ingr.textContent = ingredient;
  ingr.classList.add("item");
 document.querySelector('#ingredients').append(ingr);
}
console.log(document.querySelector('#ingredients'));