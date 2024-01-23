import Client from './Client';
import Order from './Order';
import OrderItem from './OrderItem';

const clientOne = new Client('John');

const itemOne = new OrderItem('Pizza', 35.00);
const itemTwo = new OrderItem('Coke', 5.00);

const order = new Order(clientOne, [itemOne, itemTwo], 'credit card', 0.2);

console.log(order);
console.log('Total: R$', order.calculateTotal().toFixed(2));
console.log('Total com desconto: R$', order.calculateWithDiscount().toFixed(2));

