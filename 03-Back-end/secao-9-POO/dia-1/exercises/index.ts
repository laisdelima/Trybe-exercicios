import Client from './Client';
import Order from './Order';
import OrderItem from './OrderItem';

const clientOne = new Client('John');

const itemOne = new OrderItem('Pizza', 35.00);
const itemTwo = new OrderItem('Coke', 5.00);

const order = new Order(clientOne, [itemOne, itemTwo], 'credit card', 0);

console.log(order);
