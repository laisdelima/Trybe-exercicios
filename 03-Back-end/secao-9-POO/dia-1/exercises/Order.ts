import Client from './Client';
import OrderItem from './OrderItem';

export default class Order {
  private _client: Client;
  private _order: OrderItem[] = [];
  private _payment: string;
  private _discount: number = 0;

  constructor(client: Client, order: OrderItem[], payment: string, discount: number) {
    this._client = client;
    this._order = order;
    this._payment = payment;
    this._discount = discount;
  }

  getClient(): Client {
    return this._client;
  }

  setClient(value: Client) {
    this._client = value;
  }

  getOrder(): OrderItem[] {
    return this._order;
  }

  setOrder(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('You must choose at least 1 item!')
    }
    this._order = value;
  }

  getPayment(): string {
    return this._payment;
  }

  setPayment(value: string) {
    this._payment = value;
  }

  getDiscount(): number {
    return this._discount;
  }

  setDiscount(value: number) {
    if (value < 0) {
      throw new Error('The discount cannot be a negative value!')
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this._order
      .reduce((previousValue, item) => {
        const total = previousValue + item.getPrice();

        return total;
      }, 0);
  }

  calculateWithDiscount(): number {
    return this.calculateTotal() * (1 - this._discount);
  }
}

