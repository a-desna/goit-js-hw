// =============================================================================
// Задание 1
// =============================================================================
/**
 * Перевести Цельсия в Фаренгейты
 * Написать функцию которая пересчитывает из градусов Цельсия в градусы Фаренгейта
 * - это температура в градусах Цельсия, умноженная на 9/5 плюс 32.
 */
// convertToF(-30); // -22
// convertToF(-10); // 14
// convertToF(0); // 32
// convertToF(20); // 68
// convertToF(30); // 86

// =============================================================================
// Задание 2
// =============================================================================
/**
 * Перевернуть строку
 * Написать функцию которая возвращает перевернутую строку
 */

// reverseString('hello'); // "olleh".
// reverseString('Howdy'); // "ydwoH".
// reverseString('Greetings from Earth'); // "htraE morf sgniteerG".

// =============================================================================
// Задание 3
// =============================================================================
/**
 * Найдите самое длинное слово в строке
 * Написать функцию которая возвращает длину самого длинного слова в предложении
 */

const findLongestWordLength = function(string) {
  const words = string.split(' ');
  // console.log(words);
  let wordLength = words[0];

  for (const word of words) {
    if (word.length > wordLength.length) {
      wordLength = word;
    }
  }
  console.log(wordLength.length);
};

findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
findLongestWordLength('May the force be with you'); // 5
findLongestWordLength('Google do a barrel roll'); // 6
findLongestWordLength(
  'What is the average airspeed velocity of an unladen swallow',
); // 8
findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology',
); // 19

// =============================================================================
// Задание 4
// =============================================================================
/**
 * Подтвердите окончание строки
 * Проверьте, заканчивается ли строка (первый аргумент, str)
 * заданной целевой строкой (второй аргумент, target).
 */

const confirmEnding = function(strOne, strTwo) {
  // console.log(strOne);
  console.log(strOne.slice(-strTwo.length).includes(strTwo));
};

confirmEnding('Bastian', 'n'); // true.
confirmEnding('Congratulation', 'on'); // true.
confirmEnding('Open sesame', 'same'); // true.
confirmEnding('Open sesame', 'pen'); // false.

// =============================================================================
// Задание 5
// =============================================================================
/**
 * Повторить строку Повторить строку
 * Повторите данную строку str (первый аргумент) num раз (второй аргумент).
 * Вернуть пустую строку, если num не является положительным числом.
//  */

const repeatStringNumTimes = function(str, value) {
  let res = '';
  for (let i = 0; i < value; i += 1) {
    res += str;
  }
  console.log(res);
};

repeatStringNumTimes('*', 3); // "***"
repeatStringNumTimes('abc', 3); // "abcabcabc"
repeatStringNumTimes('abc', 1); // "abc"
repeatStringNumTimes('abc', -2); // ""

// // =============================================================================
// // Задание 6
// // =============================================================================
// /**
//  * Разница двух массивов
//  * Сравните два массива и верните новый массив с элементами,
//  * найденными только в одном из двух указанных массивов, но не в обоих.
//  * Другими словами, вернуть симметричную разность двух массивов.
//  */

// const diffArray = function(arrOne, arrTwo) {};

// diffArray(['diorite', 'andesite'], ['diorite', 'dirt']); // ["andesite", "dirt"].
// diffArray([1, 2, 3], [1, 2, 4]); // [3, 4]
// diffArray(['andesite', 'grass'], ['andesite', 'grass']); // []

// // =============================================================================
// // Задание 7
// // =============================================================================
// /**
//  * Пропущенные буквы
//  * Найдите пропущенную букву в диапазоне букв и верните ее.
//  */
// fearNotLetter('abce'); // "d"
// fearNotLetter('abcdefghjklmno'); // "i"
// fearNotLetter('stvwx'); // "u"
// fearNotLetter('bcdf'); // "e"
// fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // undefined

// // =============================================================================
// // Задание 8
// // =============================================================================
// /**
//  * Сумма всех парных чисел
//  * Посчитайте сумму всех парных чисел в массиве
//  */

const sumEvens = function() {};

sumEvens([1, 2, 3, 4]); // 6
sumEvens([11, 22, 33, 44]); // 66
sumEvens([5, 7, 8, 9]); // 8
sumEvens([1, 3, 5, 7]); // 0

// // =============================================================================
// // Задание 9
// // =============================================================================
// /**
//  * Создайте животного, млекопитающегося и собаки (наследование)
//  * Напишите конструкторы Animal, Mammal и Dog
//  * которые наследуются друг от друга.
//  * Создайте свойства и методы для классов:
//  *  Animal - limbs (конечности шт.) - number
//  *  Mammal - isMammal (является млекопитающим) - boolean
//  *  Dog - bark() (гав-гав) - function
//  */
// console.log(dog.limbs); // 4
// console.log(dog.isMammal); // true
// dog.bark(); // гав-гав

// // =============================================================================
// // Задание 10
// // =============================================================================
// /**
//  * Напишите пример замыкания
//  * Например счетчик
//  */
// count(); // 1
// count(); // 2
// count(); // 3
