import Superclass from './Superclass';

export default class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
  
}

const superObj = new Superclass();
const subObj = new Subclass();

myFunc(superObj);
myFunc(subObj);