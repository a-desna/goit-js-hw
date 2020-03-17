'use strict';

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', f1);

function f1(e) {
  span.textContent = e.target.value;
  if (span.textContent === '') {
    span.textContent = 'незнакомец';
  }
}
