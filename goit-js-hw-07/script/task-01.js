'use strict';

const categories = document.querySelectorAll('#categories .item');

console.log(`В списке ${categories.length} категории.`);

categories.forEach(el => {
  const titleCategories = el.firstElementChild.textContent;
  const lengthCategories = el.lastElementChild.children.length;
  console.log(`Категория: ${titleCategories}`);
  console.log(`Количество элементов: ${lengthCategories}`);
});
