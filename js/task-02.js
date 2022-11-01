const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
const аrr = [];
const ingredientsArr = ingredients.map (ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient;
  аrr.push(ingredientsItem);
});
ingredientsList.append(...аrr);
