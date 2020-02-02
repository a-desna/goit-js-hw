'use strict';

const formatString = function(string) {
  const numberSymbols = string.length;

  if (numberSymbols >= 40) {
    const stringSlice = string.slice(0, 40);
    const stringSplite = stringSlice.split(' ');
    const stringPush = stringSplite.push('...');
    const newString = stringSplite.join(' ');
    return newString;
  }

  return string;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
