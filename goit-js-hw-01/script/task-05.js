'use strict';

const country = prompt('Укажите страну доставки!');

let message;

if (country === null) {
  console.log('Отменено пользователем!');
} else {
  let countryInLC = country.toLowerCase();
  switch (countryInLC) {
    case 'китай':
      message = 100;
      break;

    case 'чили':
      message = 250;
      break;

    case 'австралия':
      message = 170;
      break;

    case 'индия':
      message = 80;
      break;

    case 'ямайка':
      message = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна!');
  }
  if (message > 0) {
    console.log(`Доставка в ${countryInLC} будет стоить ${message} кредитов`);
  }
}
