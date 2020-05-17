'use strict';

class CountdownTimer {
  constructor(
    { selector, targetDate },
    days = 0,
    hours = 0,
    mins = 0,
    secs = 0,
    time,
  ) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.days = days;
    this.hours = hours;
    this.mins = mins;
    this.secs = secs;
    this.time = time;
    this.timerActivation = this.timerActivation();
  }

  timerActivation() {
    const timer = document.querySelector(this.selector);
    const daysSpan = timer.querySelector('[data-value="days"]');
    const hoursSpan = timer.querySelector('[data-value="hours"]');
    const minsSpan = timer.querySelector('[data-value="mins"]');
    const secsSpan = timer.querySelector('[data-value="secs"]');

    const markupTimer = () => {
      const time = this.targetDate - Date.now();
      const daysStr = Math.floor(time / (1000 * 60 * 60 * 24));
      const hoursStr = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      const minsStr = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      const secsStr = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(
        2,
        '0',
      );

      daysSpan.textContent = daysStr;
      hoursSpan.textContent = hoursStr;
      minsSpan.textContent = minsStr;
      secsSpan.textContent = secsStr;
      // console.log(time);

      if (time <= 0) {
        clearInterval(intervalId);
        daysSpan.textContent = '0';
        hoursSpan.textContent = '00';
        minsSpan.textContent = '00';
        secsSpan.textContent = '00';
      }
    };

    const intervalId = setInterval(markupTimer, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 17, 2021'),
});

// new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Jun 07, 2020'),
// });
