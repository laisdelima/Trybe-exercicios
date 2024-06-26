// 1 - Crie uma classe chamada Tv, com os atributos:

// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
  ){
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  // 2 - Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.

  turnOn() {
    console.log(`A Tv ${this.brand} possui ${this.size} polegadas, ${this.resolution} de resolução e tem as seguintes conexões disponíveis: ${this.connections}`);
  }
}

// 3 - Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

const tv1 = new Tv('Samsung', 43, '4K', ['USB' , ' HDMI' , ' Wi-Fi'])
tv1.turnOn();