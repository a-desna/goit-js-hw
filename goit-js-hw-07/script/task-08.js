'use strict';

const divControls = document.querySelector('#controls');
const inputCount = divControls.querySelector('input');
const btnCreate = divControls.querySelector('[data-action="render"]');
const btnClear = divControls.querySelector('[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', getBoxes);
btnClear.addEventListener('click', destroyBoxes);

function getBoxes() {
  const count = Number(inputCount.value);

  if (divBoxes.children.length !== 0) {
    divBoxes.innerHTML = '';
  }
  createBoxes(count);
  // inputCount.value = '';
}

let boxSize;

function createBoxMarkup() {
  const box = document.createElement('div');
  box.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() *
    255}, ${Math.random() * 255})`;
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.setAttribute('class', 'box');

  divBoxes.appendChild(box);
}

function createBoxes(amount) {
  boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    createBoxMarkup();
    boxSize += 10;
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
  inputCount.value = '';
}
