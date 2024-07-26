export default class Currency {
  constructor (code = '', name = '') {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    } else {
      this._name = name;
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    } else {
      this._code = code;
    }
  }

  get name () {
    return this._name;
  }

  get code () {
    return this._code;
  }

  set name (value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a String');
    } else {
      this._name = value;
    }
  }

  set code (value) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    } else {
      this._code = value;
    }
  }

  displayFullCurrency () {
    return `${this._name} (${this._code})`;
  }
}
