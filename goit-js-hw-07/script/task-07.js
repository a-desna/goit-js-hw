'use strict';

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
span.style.fontSize = `${input.value}px`;

input.addEventListener('input', handleFontSize);

function handleFontSize() {
  span.style.fontSize = `${input.value}px`;
}
