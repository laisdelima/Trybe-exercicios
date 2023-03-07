// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'uva', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['morango', 'maçã', 'banana'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));