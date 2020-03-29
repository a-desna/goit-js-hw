'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

const insertItemList = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  return li;
});

list.append(...insertItemList);

// function insertItemList(items, position, markupElement) {
//   const itemList = items.map(el => {
//     const li = document.createElement(markupElement);
//     li.textContent = el;
//     return li;
//   });

//   position.append(...itemList);
// }

// insertItemList(ingredients, list, 'li');
