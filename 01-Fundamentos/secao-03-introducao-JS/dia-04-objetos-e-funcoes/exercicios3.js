let order = {
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
  
// Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

  function customerInfo(order) {
    let deliveryPersonName = order.order.delivery.deliveryPerson;
    let customerName = order.name;
    let phoneNumber = order.phoneNumber;
    let address = 'address';
    let addressStreet = order[address].street;
    let addressNumber = order[address].number;
    let addressApt = order[address].apartment;

    console.log(`Olá, ${deliveryPersonName}, entrega para: ${customerName}, Telefone: ${phoneNumber}, R. ${addressStreet}, Nº: ${addressNumber}, AP: ${addressApt}`);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    let newPersonsName = order.name = 'Luiz Silva';
    let newTotalOrder = order.payment.total;
    newTotalOrder = 50;
    let pizzasFlavour = Object.keys(order.order.pizza);
    let typeCoke = order.order.drinks.coke.type;

    console.log(`Olá, ${newPersonsName}, o valor total de seu pedido de ${pizzasFlavour[0]}, ${pizzasFlavour[1]} e ${typeCoke} é R$ ${newTotalOrder},00.`);
  }
  
  orderModifier(order);
  