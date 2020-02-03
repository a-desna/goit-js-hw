'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число или нажмите отмена!');
  if (input === null) {
    break;
  } else if ((input = Number(input))) {
    numbers.push(input);
  } else if (input !== Number) {
    alert('Было введено не число, попробуйте еще раз!');
  }
} while (input !== null);

for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
