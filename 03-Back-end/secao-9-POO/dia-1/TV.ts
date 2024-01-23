class Tv {
  private _brand: string;
  private _size: string;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;
  
  constructor(b: string, s: string, r: string, con: string[]) {

    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = con;
  }

  turnOn(): void {
    console.log(`A Tv ${this._brand} possui ${this._size}, ${this._resolution} de resolução,
      com conexão ${this._connections}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(newValue: string | undefined) {
    if (!newValue || this._connections.includes(newValue)) {
      this._connectedTo = newValue;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('LG', '70"', '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv1.turnOn();
tv1.connectedTo = 'HDMI';
console.log('Connected to: ', tv1.connectedTo);