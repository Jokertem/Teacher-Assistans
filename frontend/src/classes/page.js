export class Page {
  constructor(name) {
    this.name = name;
    this.elements = [];
    this.number = undefined;
    this.id = crypto.randomUUID();
  }
}
