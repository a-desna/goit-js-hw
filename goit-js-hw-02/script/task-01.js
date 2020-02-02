'use strict';

const logItems = function(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    // console.log('индекс: ', i);
    const numberEl = i + 1;
    // console.log('номер элемента: ', numberEl);
    const valueEl = array[i];
    // console.log('значение элемента: ', valueEl);
    console.log(`${numberEl} - ${valueEl}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
