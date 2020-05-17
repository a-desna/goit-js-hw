'use strict';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColorSwitch = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const randomColorBody = (min, max) =>
      (refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(min, max)]);
    this.intervalId = setInterval(randomColorBody, 1000, 0, colors.length - 1);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener(
  'click',
  randomColorSwitch.start.bind(randomColorSwitch),
);
refs.stopBtn.addEventListener(
  'click',
  randomColorSwitch.stop.bind(randomColorSwitch),
);
