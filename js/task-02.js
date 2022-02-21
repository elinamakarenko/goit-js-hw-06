const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = ingredients.map(ingredient => {
  const ingr = document.createElement('li');
  ingr.classList.add('item')
  ingr.textContent = ingredient;
  return ingr;
});
document.querySelector('#ingredients').append(...ingredientsList);
console.log(document.querySelector('#ingredients'));