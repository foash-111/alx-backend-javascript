import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(name = '', floors = 0) {
    super(name);
    if (typeof floors !== 'number') {
      throw new TypeError('Floor must be a number');
    }

    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
