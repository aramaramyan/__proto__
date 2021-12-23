"use strict";

/* Write an Airplane object that initializes name.
  Give airplanes the ability to .takeOff() and .land():

  If a plane takes off, its isFlying property is set to true.
  If a plane lands, its isFlying property is set to false. */

const Airplane = {
  takeOff() {
    this.isFlying = true
  },
  lands() {
    this.isFlying = false;
  },
}

const airplane1 = {
  name: "Airbus 770",
  isFlying: false,
  __proto__: Airplane
}

console.log(airplane1.name);
console.log(airplane1.isFlying); // false
airplane1.takeOff();
console.log(airplane1.isFlying); // true
airplane1.lands();
console.log(airplane1.isFlying); // false

const airplane2 = {
  name: "Airbus 990",
  isFlying: false,
  __proto__: Airplane
}

console.log(airplane2.name);
console.log(airplane2.isFlying); // false
airplane2.takeOff();
console.log(airplane2.isFlying); // true
airplane2.lands();
console.log(airplane2.isFlying); // false