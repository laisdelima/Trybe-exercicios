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

// Parte III - Trablahando em uma autoescola.
// A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
// Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
// Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
// Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'

const validateData = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
};

const validateMinorAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
};

const studentRegister = (name, age) => {
  try {
    validateData(name, age);
    validateMinorAge(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
};
console.log(studentRegister('Laís', 30));
console.log(studentRegister('Laís', 15));
console.log(studentRegister('Laís'));