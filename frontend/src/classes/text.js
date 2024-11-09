export class Text {
  constructor(title, value) {
    this.type = "Text";
    this.title = title;
    this.text = value;
    this._id = crypto.randomUUID();
  }
}
