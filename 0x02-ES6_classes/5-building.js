export default class Building {
  constructor(sqft = 0) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a Number');
    } else {
      this._sqft = sqft;
    }

    if (this.constructor.name !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    // this line means , if them are equal then:
    // the sub class use the super method and didn't overrides/edits it
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    let sqft = this._sqft;
    sqft = true;
    if (sqft) throw new Error('evacuationWarningMessage method must be implemented');
  }
}
