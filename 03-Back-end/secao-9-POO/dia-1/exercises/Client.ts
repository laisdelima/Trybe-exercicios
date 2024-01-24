export default class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  getName(): string {
    return this._name;
  }

  setName(value: string) {
    if (value.length < 3) {
      throw new Error('The name must have at least 3 characters!')
    }
    this._name = value;
  }
}

const person = new Client('John');
console.log(person);
