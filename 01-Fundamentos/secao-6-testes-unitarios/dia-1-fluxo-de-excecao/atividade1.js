// Parte II - Pedido de clientes

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  // Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

  const customerInfo = (order) => {
    let deliveryPerson = order.order.delivery.deliveryPerson;
    let person = order.name;
    let phoneNumber = order.phoneNumber;
    let street = order.address.street;
    let number = order.address.number;
    let apt = order.address.apartment;
    
    console.log(`Olá ${deliveryPerson}, entrega para: ${person}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apt}`);
  };
  
  customerInfo(order);
  
// Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
  // Modifique o nome da pessoa compradora para Luiz Silva;
  // Modifique o valor total da compra para R$ 50,00.

  const orderModifier = (order) => {
    let newPerson = order.name = 'Luis Silva';
    let pizzasFlavour = Object.keys(order.order.pizza);
    let drinkType = order.order.drinks.coke.type;
    let totalOrder = order.payment.total = '50';

    console.log(`Olá ${newPerson}, o total do seu pedido de ${pizzasFlavour[0]}, ${pizzasFlavour[1]} e ${drinkType} é R$ ${totalOrder},00.`);  
  };
  
  orderModifier(order);
  