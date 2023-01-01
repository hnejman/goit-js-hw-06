const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const listRaw = document.getElementById("ingredients");
console.log(listRaw);

const addIngredients = ((ingredients, listRaw) => {
  ingredients.forEach(ingredient => {
    const lastItem = document.createElement("li");
    lastItem.textContent = ingredient;
    listRaw.append(lastItem);
  });
});

addIngredients(ingredients, listRaw);