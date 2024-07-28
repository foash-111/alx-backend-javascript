// Implement a class named Car:

// Constructor attributes:
// brand (String)
// motor (String)
// color (String)

export default class Car {
  constructor(brand = '', motor = '', color = '') {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    // this.constructor refer to the class itself as an object
    // this.constructor.name refer to the class itself as a string
    return new this.constructor(this.brand, this.motor, this.color);
  }
}
