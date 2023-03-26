const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsListArr = [];
ingredients.forEach((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  ingredientsListArr.push(ingredientsItem);
});
ingredientsList.append(...ingredientsListArr);
