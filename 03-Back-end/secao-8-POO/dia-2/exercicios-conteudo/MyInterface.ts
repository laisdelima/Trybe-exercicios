export default interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

export default class MyClass implements MyInterface {
  constructor (public myNumber: number) {
    this.myNumber = myNumber;
  }

  myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;
    return `A soma entre os números é: ${sum}.`;
  }
}

const obj = new MyClass(2);
console.log(obj.myFunc(3))

