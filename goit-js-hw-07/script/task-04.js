'use strict';

let counterValue = 0;

const counter = document.querySelector('#counter');
const btnIncrement = counter.querySelector('button[data-action="increment"]');
const btnDecrement = counter.querySelector('button[data-action="decrement"]');

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counter.querySelector('#value').textContent = counterValue;
}
