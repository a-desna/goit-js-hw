'use strict';

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользова не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно, после чего снова пользов предлагается ввести число в prompt.

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число или нажмите отмена!');
  if (input === null) {
    break;
  } else if ((input = Number(input))) {
    total += input;
    numbers.push(input);
  } else if (input !== Number) {
    alert('Было введено не число, попробуйте еще раз!');
  }
  // console.log(total);
} while (input !== null);

for (const number of numbers) {
  alert(`Общая сумма чисел равна ${total}`);
  console.log(numbers);
  break;
}

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// // eslint - disable - next - line;
// for (let num of numbers) {
//   console.log(num);
//   num = 5;
// }
// console.log(numbers);

// let input;

// let total = 0;

// do {
//   input = prompt('Введите число или нажмите отмена!');
//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   } else if ((input = Number(input))) {
//     total += input;
//   } else if (input !== Number) {
//     alert('Было введено не число, попробуйте еще раз!');
//   }
//   console.log(total);
// } while (input !== null);
