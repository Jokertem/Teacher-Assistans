export class True_False {
  constructor(title, asks, points) {
    this.type = "Prawda/Fałsz";
    this.title = title;
    this.asks = asks;
    this.points = points;
    this.number = undefined;

    this._id = crypto.randomUUID();
  }
}
