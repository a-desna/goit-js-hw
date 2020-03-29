'use strict';

const input = document.querySelector('#validation-input');
const dataAttributeLength = Number(input.dataset.length);

input.addEventListener('blur', handleValidation);

function handleValidation(e) {
  if (e.currentTarget.value.length < dataAttributeLength) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid') || input.classList.add('valid');
  }
}
