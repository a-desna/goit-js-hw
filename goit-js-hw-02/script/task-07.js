'use strict';

// const arr = [1, 5, 2, 55, 4, 3, 88, 4, 6];

// let min;

const scores = [1, 2, 3, 4, 5];

// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
const deletedScores = scores.slice(3);

// Теперь массив scores содержит два элемента.
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента.
console.log(deletedScores); // [1, 2, 3]
