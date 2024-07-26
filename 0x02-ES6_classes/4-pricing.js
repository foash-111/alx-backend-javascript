import Currency from './3-currency';

export default class Pricing {
  constructor (amount = 0, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    } else {
      this._amount = amount;
    }

    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be an instance of  Currency');
    }
  }

  get amount () {
    return this._amount;
  }

  get currency () {
    return this._currency;
  }

  set amount (value) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    } else {
      this._amount = value;
    }
  }

  set currency (value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be an instance of  Currency');
    }
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice (amount = 0, conversionRate = 0) {
    return amount * conversionRate;
  }
}
