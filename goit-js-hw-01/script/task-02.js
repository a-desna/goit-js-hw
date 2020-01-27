'use strict';

const total = 100;

const ordered = 40;

let orderInfo =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(orderInfo);
