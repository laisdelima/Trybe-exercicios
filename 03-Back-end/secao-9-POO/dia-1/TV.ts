// 1
class Tv {
  brand: string;
  size: string;
  resolution: string;
  connections: string[];
  connectedTo?: string;
  
  constructor(b: string, s: string, r: string, con: string[]) {

    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = con;
  }

  // 2
  turnOn(): void {
    console.log(`A Tv ${this.brand} possui ${this.size}, ${this.resolution} de resolução,
      com conexão ${this.connections}`);
  }
}

// 3
const tv1 = new Tv('LG', '70"', '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv1.turnOn();