export default class OrderItem {
  private _itemName: string;
  private _price: number;

  constructor(itemName: string, price: number) {
    this._itemName = itemName;
    this._price = price;
  }

  getItemName(): string {
    return this._itemName;
  }

  setItemName(value: string) {
    if (value.length < 3) {
      throw new Error('The name must have at least 3 characters!')
    }
    this._itemName = value;
  }

  getPrice(): number {
    return this._price;
  }

  setPrice(value: number) {
    if (value < 0) {
      throw new Error('The price must be positive!')
    }
    this._price = value;
  }
}