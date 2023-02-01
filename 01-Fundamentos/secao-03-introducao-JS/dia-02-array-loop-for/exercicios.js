/* Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index of numbers) {
    console.log(index);
}

/* Some todos os valores contidos no array e imprima o resultado; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}

console.log(resultado);

/* Calcule e imprima a média aritmética dos valores contidos no array; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let media = soma / numbers.length;
console.log(media);

/* A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}

resultado = resultado / numbers.length;

if (resultado > 20) {
    console.log("valor maior que 20.");
} else {
    console.log("valor menor que 20.");
}

/* Utilizando for, descubra qual o maior valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for(let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}

console.log(higherNumber);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        resultado += 1;
    } 
}

if(resultado === 0) {
    console.log("nenhum valor ímpar encontrado.");
} else {
    console.log(resultado);
}

/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallestNumber = numbers[0];

for(index = 1; index < numbers.length; index += 1) {
    if(numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}
console.log(smallestNumber);

/* Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; */

let array = [];

for(index = 1; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);

/* Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. */

let array = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for(index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
}
