interface Logger {
  log(param: string): void;
}

interface Database {
  atribute: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('logger 2: ' + param);
  }
}

class ExampleDatabase implements Database {
  constructor(public atribute: Logger = new ConsoleLogger()) {
  }

  save(key: string, value: string): void {
    this.atribute.log(`Salvando o valor ${value} na chave ${key}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const exampleDb1 = new ExampleDatabase(logger1);
const exampleDb2 = new ExampleDatabase(logger2);
const exampleDb3 = new ExampleDatabase();

exampleDb1.save('key1', 'value1');
exampleDb2.save('key2', 'value2');
exampleDb3.save('key3', 'value3');
