export class Page {
  constructor(name) {
    this.name = name;
    this.elements = [];
    this.id = crypto.randomUUID();
  }
}
