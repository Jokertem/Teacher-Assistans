export class Cases {
  constructor(title, word, points) {
    this.type = "Przypadki";
    this.title = title;
    this.word = word;
    this.points = points;
    this._id = crypto.randomUUID();
  }
}
