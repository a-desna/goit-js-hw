'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let amountPerDroid = prompt('Введите количество!');

let totalPrice;

if (amountPerDroid === null) {
  console.log('Отменено пользователем!');
} else if ((amountPerDroid = Number.parseInt(amountPerDroid))) {
  totalPrice = amountPerDroid * pricePerDroid;

  if (totalPrice < credits) {
    console.log(
      `Вы купили ${amountPerDroid} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  } else console.log('Недостаточно средств на счету!');
}
