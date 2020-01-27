'use strict';

let input;

let total = 0;

do {
  input = prompt('Введите число или нажмите отмена!');
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  if ((input = Number(input))) {
    total = total + input;
  } else if (input !== Number) {
    alert('Было введено не число, попробуйте еще раз');
  }
  console.log(total);
} while (input !== null);
