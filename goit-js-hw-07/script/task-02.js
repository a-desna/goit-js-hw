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

const insertItemList = items =>
  items.map(
    el => (list.appendChild(document.createElement('li')).textContent = el),
  );

insertItemList(ingredients);
