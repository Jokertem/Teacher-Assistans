export class True_False {
  constructor(title, asks, points) {
    this.type = "Prawda/Fałsz";
    this.title = title;
    this.asks = asks;
    this.points = points;

    this._id = crypto.randomUUID();
  }
}
