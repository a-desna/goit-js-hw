'use strict';

const findLongestWord = function(string) {
  const words = string.split(' ');
  // console.log(words);
  let wordLength = words[0];

  for (const word of words) {
    if (word.length > wordLength.length) {
      wordLength = word;
    }
  }
  return wordLength;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
