export class ABC {
  constructor(title, A, B, C, D, points) {
    this.type = "ABC";
    this.title = title;
    this.anwsers = [A, B, C, D];
    this.points = points;
    this.number = undefined;
    this._id = crypto.randomUUID();
  }
}
