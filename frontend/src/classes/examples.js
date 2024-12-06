export class Examples {
  constructor(title, exa, points) {
    this.type = "Przykłady";
    this.title = title;
    this.exa = exa;
    this.points = points;
    this.number = undefined;
    this._id = crypto.randomUUID();
  }
}
