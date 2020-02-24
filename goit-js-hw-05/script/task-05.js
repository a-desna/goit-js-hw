'use strict';

class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    if (this.isOn === false) {
      this.speed = 0;
    }
  }

  accelerate(value) {
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    this.speed -= value;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
