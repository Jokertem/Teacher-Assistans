export class Examples {
  constructor(title, exa, points) {
    this.type = "Przykłady";
    this.title = title;
    this.exa = exa;
    this.points = points;
    this._id = crypto.randomUUID();
  }
}
