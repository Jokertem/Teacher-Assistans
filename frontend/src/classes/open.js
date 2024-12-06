export class Open {
  constructor(title, lines, points) {
    this.type = "Otwarte";
    this.title = title;
    this.lines = lines;
    this.points = points;
    this.number = undefined;
    this._id = crypto.randomUUID();
  }
}
