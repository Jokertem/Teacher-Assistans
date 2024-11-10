export class ABC {
  constructor(ask, A, B, C, D, points) {
    this.type = "ABC";
    this.ask = ask;
    this.anwsers = [A, B, C, D];
    this.points = points;
    this._id = crypto.randomUUID();
  }
}
