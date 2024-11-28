export class Complete {
  constructor(title, value, points) {
    this.type = "Uzupełnij Tekst";
    this.title = title;
    this.text = value;
    this.points = points;
    this._id = crypto.randomUUID();
  }
}
