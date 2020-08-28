const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredient = ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  return listItemRef;
};

const ingredientList = ingredients.map(ingredient =>
  createIngredient(ingredient),
);

const listRef = document.querySelector('#ingredients');
listRef.append(...ingredientList);

// console.log(listRef);
