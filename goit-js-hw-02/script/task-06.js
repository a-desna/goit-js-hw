'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число или нажмите отмена!');
  if (input === null) {
    break;
  } else if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз!');
  } else if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);

for (const number of numbers) {
  total += number;
}
// console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
