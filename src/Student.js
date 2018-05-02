import { Person } from "./Person";

export class Student extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  getId() {
    return this.id;
  }
}
